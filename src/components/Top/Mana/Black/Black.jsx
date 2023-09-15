import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkull } from "@fortawesome/free-solid-svg-icons";

const Black = () => {
  return (
    <div className="col text-center bg-b">
      <p id="blackValue" className="fw-bold">
        0
      </p>

      {/* <img src={BlackIcon} className="img-fluid" alt="Black" /> */}
      <FontAwesomeIcon icon={faSkull} className="txt-b" />
    </div>
  );
};

export default Black;
