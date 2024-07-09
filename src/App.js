import "./App.css";
import React from "react";
import Top from "./components/Top/Top";
import Bottom from "./components/Bottom/Bottom";
import { PlayerMenuProvider } from "./PlayerMenuContext";

const App = () => {
  return (
    <main className="vw-100 vh-100 overflow-hidden">
      <PlayerMenuProvider>
        <Top />
        <Bottom />
      </PlayerMenuProvider>
    </main>
  );
};

export default App;
