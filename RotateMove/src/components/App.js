import "../App.css";
import MenuButton from "./Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Container">
          <img
            className="App-logo moving-rotating-div"
            src="사진.jpg"
            alt=""
          ></img>
          <img
            className="App-logo moving-rotating-div"
            src="사진2.jpg"
            alt=""
          ></img>
          <img
            className="App-logo moving-rotating-div"
            src="사진3.jpg"
            alt=""
          ></img>
        </div>
        <div className="Container moving-div Container-a">
          <MenuButton value={"야호"} />
          <MenuButton value={"정말"} />
          <MenuButton value={"대단해"} />
        </div>
      </header>
    </div>
  );
}

export default App;
