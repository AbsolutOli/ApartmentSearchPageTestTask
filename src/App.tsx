import { TextBlock } from "./components/TextBlock";
import MainImage from "./assets/img/Group 1000002736.png";
import DealBackImg from "./assets/img/bottomimg.jpg";
import { Switch } from "./components/Switch";
import { Slider } from "./components/Slider";
import { useTranslation } from "react-i18next";

import "./i18n/config";

function App() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang: any) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <TextBlock />
        <div className="mainimage">
          <img width={700} src={MainImage} alt="" />
        </div>
        <div className="dealBlock">
          <div className="dealBlock__body">
            <img src={DealBackImg} alt="Deal block background" />
            <span className="icon-deal-converted"></span>
          </div>
        </div>
        <div className="sliderBlock">
          <div className="sliderBlock__top">
            <div className="sliderBlock__title">
              <h3>{t("sliderBlock.title")}</h3>
              <span className="icon-negotiation-converted"></span>
            </div>
          </div>
          <div className="sliderBlock__orderedList">
            <ol>
              <li>{t("sliderBlock.orderedList")}</li>
              <li>{t("sliderBlock.orderedList")}</li>
              <li>{t("sliderBlock.orderedList")}</li>
              <li>{t("sliderBlock.orderedList")}</li>
              <li>{t("sliderBlock.orderedList")}</li>
              <li>{t("sliderBlock.orderedList")}</li>
            </ol>
          </div>
          <Slider />
          <Switch />
          <div className="langButtons">
            <p>{t("langButtons")}</p>
            <div>
              <button onClick={() => changeLang("en")}>EN</button>
              <button onClick={() => changeLang("he")}>HE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
