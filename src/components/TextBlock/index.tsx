import { DropdownMenu } from "../DropdownMenu";
import styles from "./TextBlock.module.scss";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export const TextBlock: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.textBlock}>
      <div className={styles.textBlock__conteiner}>
        <h2 className={styles.textBlock__title}>
          <span>{t("textBlock.span")} </span>
          {t("textBlock.title")}
        </h2>
        <p className={styles.textBlock__text}>{t("textBlock.text")}</p>
        <div className={clsx(styles.textBlock__moreInfo, styles.moreInfo)}>
          <div className={styles.moreInfo__getInfo}>
            <section className={styles.moreInfo__dropdown}>
              <input id="moreInfo__check" type="checkbox" />
              <label htmlFor="moreInfo__check">
                {t("textBlock.moreInfo.check")}
              </label>
              <DropdownMenu />
            </section>
            <p className={styles.moreInfo__info}>
              {t("textBlock.moreInfo.info")}
            </p>
          </div>
          <a href="tel:*9983" className={styles.moreInfo__number}>
            9983*
          </a>
        </div>
        <div className={styles.textBlock__buttomText}>
          <p>{t("textBlock.buttomText")}</p>
        </div>
      </div>
    </div>
  );
};
