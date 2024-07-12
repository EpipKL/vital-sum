import React, { useState, useEffect } from "react";
import { usePlayerMenu } from "../../../context/PlayerMenuContext";
import PlayerRow from "./PlayerRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUserMinus, faXmark } from "@fortawesome/free-solid-svg-icons";

const MAX_PLAYERS = 6;

const PlayerList = () => {
  const { togglePlayerMenu } = usePlayerMenu();

  // Retrieve player data from localStorage, or use an empty array
  const storedPlayers = JSON.parse(localStorage.getItem("players")) || [];
  const [players, setPlayers] = useState(storedPlayers);

  // Update localStorage whenever players state changes
  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const addPlayer = () => {
    if (players.length < MAX_PLAYERS) {
      const newPlayer = { id: Date.now(), name: "Player", damage: 0, editState: false };
      setPlayers([...players, newPlayer]);
    } else {
    }
  };

  // Removes the last player from the array
  const removeLastPlayer = () => {
    setPlayers(players.slice(0, -1));
  };

  return (
    <div className="">
      {players.map((player) => (
        <PlayerRow key={player.id} player={player} setPlayers={setPlayers} />
      ))}
      <div className="d-flex justify-content-between mt-2">
        <div className="">
          <button className="btn btn-success ms-1" onClick={addPlayer}>
            <FontAwesomeIcon icon={faUserPlus} />
          </button>

          <button className="btn btn-danger ms-1" onClick={removeLastPlayer}>
            <FontAwesomeIcon icon={faUserMinus} />
          </button>
        </div>
        <button className="btn btn-secondary border-danger me-1" onClick={togglePlayerMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

export default PlayerList;
