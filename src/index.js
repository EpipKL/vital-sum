import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { PlayerMenuProvider } from "./components/Bottom/Players/PlayerMenuContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PlayerMenuProvider>
      <App />
    </PlayerMenuProvider>
  </React.StrictMode>
);
