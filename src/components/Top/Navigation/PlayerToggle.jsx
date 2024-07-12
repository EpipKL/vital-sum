import React from "react";
import { usePlayerMenu } from "../../../context/PlayerMenuContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

const PlayerToggle = () => {
  const { togglePlayerMenu } = usePlayerMenu();

  const handleClick = (e) => {
    e.preventDefault();
    togglePlayerMenu();
  };

  return (
    <button className="btn btn-primary border-secondary" onClick={handleClick}>
      <FontAwesomeIcon icon={faUserGroup} />
    </button>
  );
};

export default PlayerToggle;
