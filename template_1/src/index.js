import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";
import Content from "./JS/Content.js";
import * as serviceWorker from "./serviceWorker.js";

ReactDOM.render(<Content />, document.getElementById("root"));
serviceWorker.unregister();
