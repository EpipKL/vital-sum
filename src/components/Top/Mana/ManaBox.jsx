import White from "./White/White";
import Blue from "./Blue/Blue";
import Black from "./Black/Black";
import Red from "./Red/Red";
import Green from "./Green/Green";
import Colorless from "./Colorless/Colorless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const ManaBox = () => {
  return (
    <div className="container-fluid position-relative user-select-none">
      <div className="row">
        <White></White>

        <Blue></Blue>

        <Black></Black>

        <Red></Red>

        <Green></Green>

        <Colorless></Colorless>

        <div className="col-2 text-center text-white bg-secondary btn-secondary cursor-pointer d-flex align-items-center justify-content-center">
          <p className="fw-bold m-0 user-select-none">
            <FontAwesomeIcon icon={faRotateRight} size="xl" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManaBox;
