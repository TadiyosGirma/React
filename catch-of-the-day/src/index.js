import React from "react";
import { render } from "react-dom";
import "./css/style.css";
import Router from "./components/Router";

import StorePicker from "./components/StorePicker";
import App from "./components/App";

render(<Router />, document.querySelector("#main"));
