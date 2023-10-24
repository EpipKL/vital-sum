import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";

const Green = () => {
  const [gMana, setGMana] = useState(() => {
    const gManaValue = localStorage.getItem("g-mana");
    return gManaValue ? JSON.parse(gManaValue) : 0;
  });

  const gManaGain = () => {
    setGMana(gMana + 1);
  };

  const gManaLoss = () => {
    setGMana(gMana - 1);
  };

  useEffect(() => {
    localStorage.setItem("g-mana", JSON.stringify(gMana));
  }, [gMana]);
  return (
    <div className="col text-center bg-g" onClick={gManaGain}>
      <p id="greenValue" className="fw-bold">
        {gMana}
      </p>

      {/* <img src={GreenIcon} className="img-fluid" alt="Green" /> */}
      <FontAwesomeIcon icon={faTree} className="txt-g" />
    </div>
  );
};

export default Green;
