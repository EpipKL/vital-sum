import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Colorless = () => {
  return (
    <div className="col text-center">
      <p id="colorlessValue" className="fw-bold">
        0
      </p>

      {/* <img src={ColorlessIcon} className="img-fluid" alt="Colorless" /> */}
      <FontAwesomeIcon icon={faCircle} className="text-light" />
    </div>
  );
};

export default Colorless;
