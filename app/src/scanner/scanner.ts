import { createWorker, ImageLike, Worker } from "tesseract.js";
import { IGOOD, parseArtifact } from "./good";

import * as rois from "./rois";

export class Scanner {
  private worker: Worker | null = null;
  private data: IGOOD;

  constructor() {
    // TODO use a scheduler for multiple workers?
    this.data = {
      format: "GOOD",
      version: 1,
      source: "https://ene.ai/genshin-scanner/",
      characters: [],
      artifacts: [],
      weapons: [],
    };
  }

  async init() {
    this.worker = createWorker({
      logger: (m) => console.log(m),
    });
    await this.worker.load();
    await this.worker.loadLanguage("eng");
    await this.worker.initialize("eng");
  }

  async scan(image: ImageLike) {
    if (this.worker == null) {
      throw new Error("scanner not ready");
    }
    const worker = this.worker;

    // TODO figure out which layout we're looking at
    const recognizeRoi = async (roi: rois.ROI) => {
      const result = await worker.recognize(image, {
        rectangle: {
          left: roi.bounds[0] - 12,
          top: roi.bounds[1] - 12,
          width: roi.bounds[2] + 24,
          height: roi.bounds[3] + 24,
        },
      });
      // TODO check confidences
      return result.data.text;
    };

    const artifactName = await recognizeRoi(
      rois.INVENTORY_ARTIFACTS_ARTIFACT_NAME
    );
    const artifactMainstat = await recognizeRoi(
      rois.INVENTORY_ARTIFACTS_ARTIFACT_MAINSTAT
    );
    const artifactLevel = await recognizeRoi(
      rois.INVENTORY_ARTIFACTS_ARTIFACT_LEVEL
    );
    const artifactSubstats = await recognizeRoi(
      rois.INVENTORY_ARTIFACTS_ARTIFACT_SUBSTATS
    );

    const artifact = parseArtifact(
      artifactName,
      artifactMainstat,
      artifactLevel,
      artifactSubstats
    );
    if (artifact != null) {
      const existingArtifacts = this.data.artifacts.map((a) =>
        JSON.stringify(a)
      );
      if (!existingArtifacts.includes(JSON.stringify(artifact))) {
        this.data.artifacts.push(artifact);
      }
    }

    console.log(artifactName, artifactLevel, artifactSubstats);
  }

  async cleanup() {
    if (this.worker != null) {
      await this.worker.terminate();
    }
  }

  getData(): IGOOD {
    return JSON.parse(JSON.stringify(this.data));
  }
}
