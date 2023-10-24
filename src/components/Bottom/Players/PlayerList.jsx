import React, { useState, useEffect } from "react";
import PlayerRow from "./PlayerRow";
import { usePlayerMenu } from "./PlayerMenuContext";

const PlayerList = () => {
  const { togglePlayerMenu, isPlayerMenuVisible } = usePlayerMenu();

  // Retrieve player data from localStorage, or use an empty array
  const storedPlayers = JSON.parse(localStorage.getItem("players")) || [];
  const [players, setPlayers] = useState(storedPlayers);

  // Update localStorage whenever players state changes
  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const addPlayer = () => {
    const newPlayer = { id: Date.now(), name: "Player", damage: 0, editState: false };
    setPlayers([...players, newPlayer]);
  };

  return (
    <div className="">
      {players.map((player) => (
        <PlayerRow key={player.id} player={player} setPlayers={setPlayers} />
      ))}
      <div className="d-flex justify-content-between mt-2">
        <button className="btn btn-primary ms-1" onClick={addPlayer}>
          Add Player
        </button>
        <button className="btn btn-secondary me-1" onClick={togglePlayerMenu}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PlayerList;
