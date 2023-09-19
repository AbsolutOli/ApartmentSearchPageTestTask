import { DropdownMenu } from "../DropdownMenu";

export const TextBlock: React.FC = () => {
  return (
    <div className="textBlock">
      <h2 className="textBlock__title">
        !הגדל את המכירות שלך<span> מתווך?</span>
      </h2>
      <p className="textBlock__text">
        באמצעות טכנולוגיה חדשנית המאפשרת לבנות מודל תלת ממדי של הנכס, אתר GetKey
        חולה בתחום השיווק הדיגיטלי ומצעיר אתכם לעולם חדשני רת הרבה יותר מהיום
        תוכלו לספק ללקוחותיכם חווית קנייה, מכירה או השכרה סוחפת מרק תמונות, עם
        סיור וירטואלי שמזמן הפך לכלי שיווק נוח, קל ומשתלם מאי פעם למידע נוסף
      </p>
      <div className="textBlock__moreInfo moreInfo">
        <div className="moreInfo__getInfo">
          <section>
            <input id="moreInfo__check" type="checkbox" />
            <label htmlFor="moreInfo__check"> למידע נוסף</label>
            <DropdownMenu />
          </section>
          <p className="moreInfo__info"> להזמנת צילום ופרסום חיים</p>
          <a href="tel:*9983" className="moreInfo__number">
            *9983
          </a>
        </div>
      </div>
      <p className="textBlock__buttomText">
        לורם איפסוםוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי קר
      </p>
    </div>
  );
};
