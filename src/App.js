import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import {SecondPart,FirstPartBusy,FirstPartOpen} from './components'
function App() {
  return (
    <div className="App">

      

      <SecondPart/>
    </div>
  );
}

export default App;
