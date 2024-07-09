import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomModule = () => {
  return (
    <div className="border border-5 border-dark h-50 d-flex justify-content-center align-items-center cursor-pointer">
      <FontAwesomeIcon icon={faPlus} className="fs-1" />
    </div>
  );
};

export default BottomModule;
