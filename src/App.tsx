import { TextBlock } from "./components/TextBlock";
import MainImage from "./assets/img/Group 1000002736.png";
import DealBackImg from "./assets/img/bottomimg.jpg";

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
        </div>
      </div>
    </div>
  );
}

export default App;
