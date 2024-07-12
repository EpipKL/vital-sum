import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";

const Green = () => {
  const [mana, setMana] = useState(() => {
    const manaValue = localStorage.getItem("b-mana");
    try {
      return manaValue ? JSON.parse(manaValue) : 0;
    } catch (e) {
      console.error("Error parsing b-mana from localStorage", e);
      return 0;
    }
  });

  const clickTimeout = useRef(null);

  const manaGain = () => {
    setMana((prevMana) => prevMana + 1);
  };

  const manaLoss = () => {
    setMana((prevMana) => (prevMana >= 0 ? prevMana - 1 : 0));
  };

  const handleClick = () => {
    clickTimeout.current = setTimeout(() => {
      manaGain();
    }, 250);
  };

  const handleDoubleClick = () => {
    clearTimeout(clickTimeout.current);
    manaLoss();
  };

  useEffect(() => {
    localStorage.setItem("b-mana", JSON.stringify(mana));
  }, [mana]);

  useEffect(() => {
    const syncMana = () => {
      const manaValue = localStorage.getItem("b-mana");
      try {
        if (manaValue) {
          setMana(JSON.parse(manaValue));
        }
      } catch (e) {
        console.error("Error parsing u-mana from localStorage", e);
      }
    };

    window.addEventListener("storage", syncMana);
    return () => {
      window.removeEventListener("storage", syncMana);
    };
  }, []);
  return (
    <div
      className="col text-center bg-g cursor-pointer"
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}>
      <p id="greenValue" className="fw-bold">
        {mana}
      </p>

      <FontAwesomeIcon icon={faTree} className="txt-g" />
    </div>
  );
};

export default Green;
