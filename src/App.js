import "./App.css";
import SecondPart from "./SecondPart";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FirstPartBusy from "./FirstPartBusy";
import FirstPartOpen from "./FirstPartOpen";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      {/* <FirstPartBusy/> */}
      <FirstPartOpen />

      <SecondPart></SecondPart>
    </div>
  );
}

export default App;
