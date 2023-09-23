import styles from "./Switch.module.scss";
import { useTranslation } from "react-i18next";

export const Switch = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.switch}>
      <p className={styles.switch__text}>{t("switch.text")}</p>
      <label className={styles.switch__box}>
        <input className={styles.switch__input} type="checkbox" />
        <div className={styles.switch__content}>
          <span className={styles.switch__yes}>{t("switch.yes")}</span>
          <span className={styles.switch__slider}></span>
          <span className={styles.switch__no}>{t("switch.no")}</span>
        </div>
      </label>
    </div>
  );
};
