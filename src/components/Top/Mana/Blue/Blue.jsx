import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

const Blue = () => {
  const [uMana, setUMana] = useState(() => {
    const uManaValue = localStorage.getItem("u-mana");
    return uManaValue ? JSON.parse(uManaValue) : 0;
  });

  const uManaGain = () => {
    setUMana(uMana + 1);
  };

  const uManaLoss = () => {
    setUMana(uMana - 1);
  };

  useEffect(() => {
    localStorage.setItem("u-mana", JSON.stringify(uMana));
  }, [uMana]);
  return (
    <div className="col text-center bg-u" onClick={uManaGain}>
      <p id="blueValue" className="fw-bold">
        {uMana}
      </p>

      {/* <img src={BlueIcon} className="img-fluid" alt="Blue" /> */}
      <FontAwesomeIcon icon={faDroplet} className="txt-u" />
    </div>
  );
};

export default Blue;
