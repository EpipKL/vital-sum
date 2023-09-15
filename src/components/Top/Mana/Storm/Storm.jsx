import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";

const Storm = () => {
  return (
    <div className="col text-center bg-s">
      <p id="stormValue" className="fw-bold">
        0
      </p>

      {/* <img src={StormIcon} className="img-fluid" alt="Storm" /> */}
      <FontAwesomeIcon icon={faCloudShowersHeavy} />
    </div>
  );
};

export default Storm;
