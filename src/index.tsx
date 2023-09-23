import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./scss/app.scss";

import "./i18n/config";

const rootElem = document.getElementById("root");
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
