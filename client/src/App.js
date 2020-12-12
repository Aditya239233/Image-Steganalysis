/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar_ from "./components/navbar";
import Encrypt from "./components/encrypt";
import Decrypt from "./components/decrypt";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div>
      <Navbar_ />
      <div className="body">
        <BrowserRouter>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/encrypt" component={Encrypt} />
          <Route exact path="/decrypt" component={Decrypt} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
