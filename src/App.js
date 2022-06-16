import "./App.css";
import FirstComp from "./Components/FirstComp";
import NavBar from "./Components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CartDetails from "./Components/CartDetails";

function App() {
  return (
    
      <div className="App">
      <NavBar />
      
      <Routes>
          <Route path="/" element = {<FirstComp />}/>
          
          <Route path="/cart/:id" element= {<CartDetails/>}/>
          
          </Routes>
          </div>  
      
    
  );
}

export default App;
