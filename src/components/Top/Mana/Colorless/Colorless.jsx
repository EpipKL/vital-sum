import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Colorless = () => {
  const [cMana, setCMana] = useState(() => {
    const cManaValue = localStorage.getItem("c-mana");
    return cManaValue ? JSON.parse(cManaValue) : 0;
  });

  const cManaGain = () => {
    setCMana(cMana + 1);
  };

  const cManaLoss = () => {
    setCMana(cMana - 1);
  };

  useEffect(() => {
    localStorage.setItem("c-mana", JSON.stringify(cMana));
  }, [cMana]);
  return (
    <div className="col text-center" onClick={cManaGain}>
      <p id="colorlessValue" className="fw-bold">
        {cMana}
      </p>

      {/* <img src={ColorlessIcon} className="img-fluid" alt="Colorless" /> */}
      <FontAwesomeIcon icon={faCircle} className="text-light" />
    </div>
  );
};

export default Colorless;
