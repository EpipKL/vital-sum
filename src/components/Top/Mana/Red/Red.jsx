import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const Red = () => {
  const [rMana, setRMana] = useState(() => {
    const rManaValue = localStorage.getItem("r-mana");
    return rManaValue ? JSON.parse(rManaValue) : 0;
  });

  const rManaGain = () => {
    setRMana(rMana + 1);
  };

  const rManaLoss = () => {
    setRMana(rMana - 1);
  };

  useEffect(() => {
    localStorage.setItem("r-mana", JSON.stringify(rMana));
  }, [rMana]);
  return (
    <div className="col text-center bg-r" onClick={rManaGain}>
      <p id="redValue" className="fw-bold">
        {rMana}
      </p>

      {/* <img src={RedIcon} className="img-fluid" alt="Red" /> */}
      <FontAwesomeIcon icon={faFire} className="txt-r" />
    </div>
  );
};

export default Red;
