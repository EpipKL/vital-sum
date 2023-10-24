import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const White = () => {
  const [wMana, setWMana] = useState(() => {
    const wManaValue = localStorage.getItem("w-mana");
    return wManaValue ? JSON.parse(wManaValue) : 0;
  });

  const wManaGain = () => {
    setWMana(wMana + 1);
  };

  const wManaLoss = () => {
    setWMana(wMana - 1);
  };

  useEffect(() => {
    localStorage.setItem("w-mana", JSON.stringify(wMana));
  }, [wMana]);

  return (
    <div className="col text-center bg-w" onClick={wManaGain}>
      <p id="whiteValue" className="fw-bold">
        {wMana}
      </p>

      {/* <img src={WhiteIcon} className="img-fluid text-w" alt="white" /> */}
      <FontAwesomeIcon icon={faSun} className="txt-w" />
    </div>
  );
};

export default White;
