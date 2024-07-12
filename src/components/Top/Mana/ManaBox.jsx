import White from "./White/White";
import Blue from "./Blue/Blue";
import Black from "./Black/Black";
import Red from "./Red/Red";
import Green from "./Green/Green";
import Colorless from "./Colorless/Colorless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const ManaBox = () => {
  const manaReset = () => {
    const mana = JSON.stringify(0);
    localStorage.setItem("w-mana", mana);
    localStorage.setItem("u-mana", mana);
    localStorage.setItem("b-mana", mana);
    localStorage.setItem("r-mana", mana);
    localStorage.setItem("g-mana", mana);
    localStorage.setItem("c-mana", mana);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="container-fluid position-relative user-select-none">
      <div className="row">
        <White></White>

        <Blue></Blue>

        <Black></Black>

        <Red></Red>

        <Green></Green>

        <Colorless></Colorless>

        <div
          className="col-2 text-center text-white bg-secondary btn-secondary cursor-pointer d-flex align-items-center justify-content-center"
          onClick={manaReset}>
          <p className="fw-bold m-0 user-select-none">
            <FontAwesomeIcon icon={faRotateRight} size="xl" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManaBox;
