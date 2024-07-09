import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkull } from "@fortawesome/free-solid-svg-icons";

const Black = () => {
  const [bMana, setBMana] = useState(() => {
    const bManaValue = localStorage.getItem("b-mana");
    return bManaValue ? JSON.parse(bManaValue) : 0;
  });

  const bManaGain = () => {
    setBMana(bMana + 1);
  };

  useEffect(() => {
    localStorage.setItem("b-mana", JSON.stringify(bMana));
  }, [bMana]);
  return (
    <div className="col text-center bg-b" onClick={bManaGain}>
      <p id="blackValue" className="fw-bold">
        {bMana}
      </p>

      {/* <img src={BlackIcon} className="img-fluid" alt="Black" /> */}
      <FontAwesomeIcon icon={faSkull} className="txt-b" />
    </div>
  );
};

export default Black;
