import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const White = () => {
  return (
    <div className="col text-center bg-w">
      <p id="whiteValue" className="fw-bold">
        0
      </p>

      {/* <img src={WhiteIcon} className="img-fluid text-w" alt="white" /> */}
      <FontAwesomeIcon icon={faSun} className="txt-w" />
    </div>
  );
};

export default White;
