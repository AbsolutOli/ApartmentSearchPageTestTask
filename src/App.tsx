import { TextBlock } from "./components/TextBlock";
import MainImage from "./assets/img/Group 1000002736.png";
import DealBackImg from "./assets/img/bottomimg.jpg";
import { Switch } from "./components/Switch";
import { Slider } from "./components/Slider";

function App() {
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
              <h3> בעלי מקצוע</h3>
              <span className="icon-negotiation-converted"></span>
            </div>
          </div>
          <div className="sliderBlock__orderedList">
            <ol>
              <li>
                קונ אדיפיסינג אלית לורם איפסום דולור סיט אמט, סקטורר קונסקטורר
              </li>
              <li>
                קונסקטורר אדיפיסינג דולור אלית לורם איפסוםסיט אמט, קונסקטורר
              </li>
              <li>
                קונסקטורר אדיפיסינג אלית לורם סיט אמט איפסום דולור, קונסקטורר
              </li>
              <li>
                קונסקטורר אדיפיסינג לורם איפסום אלית דולור סיט אמט, קונסקטורר
              </li>
              <li>
                קונסקטורר אלית לורם איפסום דולור אדיפיסינגסיט אמט, קונסקטורר
              </li>
              <li>
                קונסקטוררלורם איפסום אדיפיסינג אלית דולור סיט אמט, קונסקטורר
              </li>
            </ol>
          </div>
          <Slider />
          <Switch />
        </div>
      </div>
    </div>
  );
}

export default App;
