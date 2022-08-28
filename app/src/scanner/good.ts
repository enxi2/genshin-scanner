// GOOD format
// https://frzyc.github.io/genshin-optimizer/#/doc
// Re-exported from the submodule.

import Fuse from "fuse.js";

import {
  IArtifact,
  ISubstat,
  MainStatKey,
  SubstatKey,
} from "go/Types/artifact";
import { ArtifactSetKey, SlotKey } from "go/Types/consts";
import { IWeapon } from "go/Types/weapon";

import {
  ARTIFACT_DISPLAY_NAMES,
  MAINSTAT_DISPLAY_NAMES,
  SUBSTAT_DISPLAY_NAMES,
} from "./genshin";

export type IGOOD = {
  format: "GOOD";
  source: string;
  version: 1;
  artifacts: IArtifact[];
  characters: []; // avoid importing ICharacter, which has react and mui deps
  weapons: IWeapon[];
};

function normalizeName(name: string): string {
  return name
    .trim()
    .toUpperCase()
    .replaceAll(/[\s\W]/g, "");
}

const MAINSTAT_NORMALIZED_DISPLAY_NAMES = Object.fromEntries(
  Object.entries(MAINSTAT_DISPLAY_NAMES).map(([key, value]) => [
    normalizeName(key),
    value,
  ])
);
function parseMainstat(mainstat: string, slot: SlotKey): MainStatKey {
  if (slot === "flower") {
    return "hp";
  }
  if (slot === "plume") {
    return "atk";
  }
  const fuse = new Fuse(Object.keys(MAINSTAT_NORMALIZED_DISPLAY_NAMES));
  const result = fuse.search(normalizeName(mainstat));
  if (result.length > 0) {
    return MAINSTAT_NORMALIZED_DISPLAY_NAMES[result[0].item];
  }
  throw new Error(`unknown mainstat (name=${mainstat})`);
}

function parseLevel(level: string): number {
  return parseInt(level.replaceAll(/\D/g, ""));
}

const SUBSTAT_NORMALIZED_DISPLAY_NAMES = Object.fromEntries(
  Object.entries(SUBSTAT_DISPLAY_NAMES).map(([key, value]) => [
    normalizeName(key),
    value,
  ])
);
function parseSubstatName(name: string, value: string): SubstatKey {
  const isPercentage = value.includes("%") ? 1 : 0;
  const fuse = new Fuse(Object.keys(SUBSTAT_NORMALIZED_DISPLAY_NAMES));
  const result = fuse.search(normalizeName(name));
  if (result.length > 0) {
    return SUBSTAT_NORMALIZED_DISPLAY_NAMES[result[0].item][isPercentage];
  }
  throw new Error(`unknown substat (name=${name}, value=${value})`);
}

function parseSubstats(substats: string): ISubstat[] {
  const parsed: ISubstat[] = [];
  substats.split("\n").forEach((line) => {
    line = line.replaceAll(/\s/g, "");
    const split = line.search(/[\+H]\d/); // sometimes + is recognized as H
    if (split > 0) {
      const name = line.substring(0, split);
      const value = line.substring(split + 1).replaceAll(/[Y]/g, "7"); // someimtes 7 is recognized as Y
      parsed.push({
        key: parseSubstatName(name, value),
        value: parseFloat(value), // TODO correct certain values that are clearly wrong
      });
    }
  });
  return parsed;
}

/**
 * Fuzzily parse an artifact from OCR'd text.
 */
export function parseArtifact(
  name: string,
  mainstat: string,
  level: string,
  substats: string
): IArtifact | null {
  // TODO create a reverse mapping
  const n = normalizeName(name);
  let parsedSlot: SlotKey | null = null;
  let parsedSet: ArtifactSetKey | null = null;
  for (const [artifactSetName, artifactSet] of Object.entries(
    ARTIFACT_DISPLAY_NAMES
  )) {
    for (const slot in artifactSet) {
      if (normalizeName(artifactSet[slot as SlotKey]) === n) {
        parsedSlot = slot as SlotKey;
        parsedSet = artifactSetName as ArtifactSetKey;
        break;
      }
    }
  }
  if (parsedSlot == null || parsedSet == null) {
    return null;
  }

  const parsedMainstat = parseMainstat(mainstat, parsedSlot);
  const parsedLevel = parseLevel(level);
  const parsedSubstats = parseSubstats(substats);
  return {
    setKey: parsedSet,
    slotKey: parsedSlot,
    level: parsedLevel,
    rarity: 5, // TODO parse rarity
    mainStatKey: parsedMainstat,
    location: "",
    lock: false,
    substats: parsedSubstats,
    exclude: false,
  };
}
