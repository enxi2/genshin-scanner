import styles from "./Actions.module.scss";

interface ActionsProps {
  disabled: boolean;
  onScan: () => void;
}

export default function Actions(props: ActionsProps) {
  const { disabled, onScan } = props;

  return (
    <div className={styles.actions}>
      <button disabled={disabled} onClick={onScan}>
        Scan
      </button>
    </div>
  );
}
