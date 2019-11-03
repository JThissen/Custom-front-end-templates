import React from "react";
import ReactDOM from "react-dom";
import "./Css/index.css";
import Content from "./Content.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Content />, document.getElementById("root"));
serviceWorker.unregister();
