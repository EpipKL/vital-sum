import React, { createContext, useContext, useState } from "react";

const PlayerMenuContext = createContext();

export const PlayerMenuProvider = ({ children }) => {
  const [isPlayerMenuVisible, setIsPlayerMenuVisible] = useState(true);

  const togglePlayerMenu = () => {
    setIsPlayerMenuVisible((prev) => !prev);
  };

  return (
    <PlayerMenuContext.Provider value={{ isPlayerMenuVisible, togglePlayerMenu }}>
      {children}
    </PlayerMenuContext.Provider>
  );
};

export const usePlayerMenu = () => {
  return useContext(PlayerMenuContext);
};
