import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "@fontsource/roboto/400.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
