import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import App from "./App";
window.h = createBrowserHistory();
ReactDOM.render(<App />, document.getElementById("root"));
