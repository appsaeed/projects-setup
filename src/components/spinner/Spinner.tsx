import styles from "./Spinner.module.css";
export function FastSpinner() {
  return (
    <div className={styles.preloader_spinner}>
      <svg className={styles.preloader_spinner_icon} viewBox="0 0 24 24">
        <path
          d="M 22.49772,12.000001 A 10.49772,10.497721 0 0 1 12,22.497722 10.49772,10.497721 0 0 1 1.5022797,12.000001 10.49772,10.497721 0 0 1 12,1.5022797 10.49772,10.497721 0 0 1 22.49772,12.000001 Z"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export const Dotloader = () => <span className={styles.dot_dot_loader}></span>;
export const DotProgress = () => <span className={styles.dot_progress}></span>;
