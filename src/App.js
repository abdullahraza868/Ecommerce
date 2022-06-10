import "./App.css";
import FirstComp from "./Components/FirstComp";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />

      <h2 style={{ marginTop: "80px" }}>PIZZA MENU</h2>
      <FirstComp />
    </div>
  );
}

export default App;
