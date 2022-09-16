import Actor from "./Actor";
import "./App.css";
import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Try React</p>
        <Timer />
        <Actor />
      </header>
    </div>
  );
}

export default App;
