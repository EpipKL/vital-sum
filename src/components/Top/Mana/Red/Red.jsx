import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const Red = () => {
  return (
    <div className="col text-center bg-r">
      <p id="redValue" className="fw-bold">
        0
      </p>

      {/* <img src={RedIcon} className="img-fluid" alt="Red" /> */}
      <FontAwesomeIcon icon={faFire} className="txt-r" />
    </div>
  );
};

export default Red;
