import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";

const Green = () => {
  return (
    <div className="col text-center bg-g">
      <p id="greenValue" className="fw-bold">
        0
      </p>

      {/* <img src={GreenIcon} className="img-fluid" alt="Green" /> */}
      <FontAwesomeIcon icon={faTree} className="txt-g" />
    </div>
  );
};

export default Green;
