import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Two = () => {
    return (
        <div className="border border-5 border-danger h-50 d-flex justify-content-center align-items-center cursor-pointer">
            <FontAwesomeIcon icon={faPlus} className="fs-1" />
        </div>
    )
}

export default Two;
