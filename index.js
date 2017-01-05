import { render } from "react-dom";
import React from "react";
import App from "./components/App";

document.addEventListener("DOMContentLoaded", () => {
    const containerEl = document.getElementById("container");

render(
    <App />,
    containerEl
);
});