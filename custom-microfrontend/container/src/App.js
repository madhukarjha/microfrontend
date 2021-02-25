import React from "react";
import {
  NavLink,
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import MicroFrontend from "./MicroFrontend";

const {
  REACT_APP_CONTENT_APP1: subapp1,
  REACT_APP_CONTENT_APP2: subapp2,
} = process.env;

const App1 = ({ history }) => (
  <MicroFrontend history={history} host={subapp1} name="subapp1" />
);
const App2 = ({ history }) => (
  <MicroFrontend history={history} host={subapp2} name="subapp2" />
);
const Home = () => (
  <>
    <p>Rendered by Container</p>
  </>
);
function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 25, display: "flex" }}>
        <div style={{ padding: "0px 15px" }}>
          <NavLink
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#282c34",
              fontSize: 20,
            }}
            to="/home"
          >
            Home
          </NavLink>
        </div>
        <div style={{ padding: "0px 15px" }}>
          <NavLink
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#282c34",
              fontSize: 20,
            }}
            to="/subapp1"
          >
            SubApp1
          </NavLink>
        </div>
        <div style={{ padding: "0px 15px" }}>
          <NavLink
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "#282c34",
              fontSize: 20,
            }}
            to="/subapp2"
          >
            SubApp2
          </NavLink>
        </div>
      </div>

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/subapp1" render={() => <App1 />} />
        <Route path="/subapp2" render={() => <App2 />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
