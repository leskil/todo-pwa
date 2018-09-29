import * as React from "react";
import * as ReactDOM from "react-dom";
import { Shell } from "./components/shell/shell.jsx";

ReactDOM.render(<Shell />, document.getElementById("shell"));
module.hot.accept();