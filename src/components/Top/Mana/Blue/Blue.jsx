import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

const Blue = () => {
  return (
    <div className="col text-center bg-u">
      <p id="blueValue" className="fw-bold">
        0
      </p>

      {/* <img src={BlueIcon} className="img-fluid" alt="Blue" /> */}
      <FontAwesomeIcon icon={faDroplet} className="txt-u" />
    </div>
  );
};

export default Blue;
