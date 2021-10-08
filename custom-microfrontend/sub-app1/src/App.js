import logo from "./logo.svg";
import "./App.css";
import { createBrowserHistory } from "history";

function App(props) {
  const defaultHistory = createBrowserHistory();
  const param = props.history || defaultHistory;
  return <div className="App">App1 - {param.location.pathname}</div>;
}

export default App;
