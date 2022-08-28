import { useCallback, useState } from "react";
import cx from "classnames";
import InformationCircleIcon from "@heroicons/react/24/outline/InformationCircleIcon";

import styles from "./Intro.module.scss";

export default function Intro() {
  const [showAbout, setShowAbout] = useState<boolean>(false);

  const toggleAbout = useCallback(() => setShowAbout((s) => !s), []);

  return (
    <div className={styles.intro}>
      <div className={styles.header}>
        <h1>Another Genshin Scanner</h1>
        <div className={styles.aboutToggle} onClick={toggleAbout}>
          <InformationCircleIcon />
        </div>
      </div>
      <div
        className={cx(styles.about, showAbout ? styles.visible : styles.hidden)}
      >
        <h3>About</h3>
        <p>Web-based Genshin Scanner.</p>
        <p>
          Questions or feedback =&gt;{" "}
          <a
            href="https://discordapp.com/users/659617582298562570"
            target="_blank"
            rel="noreferrer"
          >
            enxi#0410
          </a>
        </p>
      </div>
    </div>
  );
}
