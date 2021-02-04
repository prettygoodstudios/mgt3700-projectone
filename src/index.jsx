import React from "react";
import {render} from "react-dom";

import App from "./components/App.jsx";

import * as styles from "./styles/main.scss";

const appWrapper = document.querySelector(".app-wrapper");

render(<App/>, appWrapper);