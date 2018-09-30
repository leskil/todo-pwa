import * as React from "react";
import * as ReactDOM from "react-dom";
import { Shell } from "./components/shell/shell.jsx";

registerServiceWorker();
setupReact();
enableHMR();

function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", function() {
            navigator.serviceWorker.register("serviceworker.js").then(function(registration) {
                console.log("Service worker successfully registered with scope " + registration.scope);
            }, function(err) {
                console.log("Error registering service worker: ", err);
            });
        })
    }
}

function setupReact() {
    ReactDOM.render(<Shell />, document.getElementById("shell"));
}

function enableHMR() {
    module.hot.accept();
}