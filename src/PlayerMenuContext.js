import React, { createContext, useState, useContext } from "react";

const PlayerMenuContext = createContext();

export const PlayerMenuProvider = ({ children }) => {
  const [playerMenuVisible, setPlayerMenuVisible] = useState(false);

  const togglePlayerMenu = () => {
    setPlayerMenuVisible((prevState) => !prevState);
  };

  return (
    <PlayerMenuContext.Provider value={{ playerMenuVisible, togglePlayerMenu }}>
      {children}
    </PlayerMenuContext.Provider>
  );
};

export const usePlayerMenu = () => {
  return useContext(PlayerMenuContext);
};
