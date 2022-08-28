import { useCallback, useMemo } from "react";

import { IGOOD } from "../scanner/good";

import styles from "./Output.module.scss";

interface OutputProps {
  data: IGOOD | null;
}

export default function Output(props: OutputProps) {
  const { data } = props;

  const jsonOutput = useMemo(() => {
    if (data == null) {
      return "";
    } else {
      return JSON.stringify(data, null, 2);
    }
  }, [data]);

  const exportJson = useCallback(() => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(
      new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    );
    a.download = `genshin_scanner.json`;
    a.click();
  }, [data]);

  return (
    <div className={styles.output}>
      <h3>GOOD Format Output</h3>
      <div className={styles.options}>
        <button className={styles.export} onClick={exportJson}>
          Export JSON
        </button>
      </div>
      <textarea
        className={styles.jsonOutput}
        readOnly={true}
        value={jsonOutput}
      ></textarea>
    </div>
  );
}
