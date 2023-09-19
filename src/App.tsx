import { TextBlock } from "./components/TextBlock";
import MainImage from "./assets/img/Group 1000002736.png";

function App() {
  return (
    <div className="wrapper">
      <TextBlock />
      <div className="mainimage">
        <img width={700} src={MainImage} alt="" />
      </div>
    </div>
  );
}

export default App;
