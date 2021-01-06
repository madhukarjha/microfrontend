import React from "react";
import { MyButton } from "../lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <MyButton label="Email Address" placeholder="name@example.com" />
  </div>
);

export default App;