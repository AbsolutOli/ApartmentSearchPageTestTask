import { DropdownMenu } from "../DropdownMenu";
import styles from "./TextBlock.module.scss";
import clsx from "clsx";

export const TextBlock: React.FC = () => {
  return (
    <div className={styles.textBlock}>
      <div className={styles.textBlock__conteiner}>
        <h2 className={styles.textBlock__title}>
          <span> מתווך?</span> הגדל את המכירות שלך!
        </h2>
        <p className={styles.textBlock__text}>
          באמצעות טכנולוגיה חדשנית המאפשרת לבנות מודל תלת ממדי של הנכס, אתר
          GetKey חולה בתחום השיווק הדיגיטלי ומצעיר אתכם לעולם חדשני רת הרבה יותר
          מהיום תוכלו לספק ללקוחותיכם חווית קנייה, מכירה או השכרה סוחפת מרק
          תמונות, עם סיור וירטואלי שמזמן הפך לכלי שיווק נוח, קל ומשתלם מאי פעם
          למידע נוסף
        </p>
        <div className={clsx(styles.textBlock__moreInfo, styles.moreInfo)}>
          <div className={styles.moreInfo__getInfo}>
            <section className={styles.moreInfo__dropdown}>
              <input id="moreInfo__check" type="checkbox" />
              <label htmlFor="moreInfo__check"> למידע נוסף</label>
              <DropdownMenu />
            </section>
            <p className={styles.moreInfo__info}> להזמנת צילום ופרסום חיים</p>
          </div>
          <a href="tel:*9983" className={styles.moreInfo__number}>
            9983*
          </a>
        </div>
        <div className={styles.textBlock__buttomText}>
          <p>לורם איפסוםוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קר</p>
        </div>
      </div>
    </div>
  );
};
