import "./App.css";
import React, { useEffect } from "react";
import Top from "./components/Top/Top";
import Bottom from "./components/Bottom/Bottom";
import { PlayerMenuProvider } from "./context/PlayerMenuContext";
import { releaseWakeLock, requestWakeLock } from "./utils/wakeLockService";

const App = () => {
  useEffect(() => {
    // Request a wake lock when app loads
    requestWakeLock();
    console.log("Wake lock has been activated");

    // Clean up
    return () => {
      releaseWakeLock();
    };
  });

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
