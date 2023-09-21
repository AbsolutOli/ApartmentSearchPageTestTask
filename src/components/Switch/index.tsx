import styles from "./Switch.module.scss";

export const Switch = () => {
  return (
    <div className={styles.switch}>
      <p className={styles.switch__text}> יש לכם שאלה? דברו איתנו</p>
      <label className={styles.switch__box}>
        <input className={styles.switch__input} type="checkbox" />
        <div className={styles.switch__content}>
          <span className={styles.switch__yes}>Yes</span>
          <span className={styles.switch__slider}></span>
          <span className={styles.switch__no}>No</span>
        </div>
      </label>
    </div>
  );
};
