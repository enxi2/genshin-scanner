import { ReactNode, useCallback, useState } from "react";
import cx from "classnames";

import styles from "./Debug.module.scss";

interface DebugProps {
  children: ReactNode;
}

export default function Debug(props: DebugProps) {
  const { children } = props;

  const [showDebug, setShowDebug] = useState<boolean>(false);

  const toggleDebug = useCallback(() => setShowDebug((s) => !s), []);

  return (
    <div className={styles.debug}>
      <h3>Debug</h3>
      <button onClick={toggleDebug}>{showDebug ? "Hide" : "Show"}</button>
      <div
        className={cx(
          styles.contents,
          showDebug ? styles.visible : styles.hidden
        )}
      >
        {children}
      </div>
    </div>
  );
}
