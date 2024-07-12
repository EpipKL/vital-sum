import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const resetLocalStorage = () => {
  localStorage.clear();
  window.location.reload();
};

const ResetModal = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#resetModal">
        <FontAwesomeIcon icon={faRotateRight} />
      </button>

      <div
        className="modal fade"
        id="resetModal"
        tabIndex="-1"
        aria-labelledby="resetModalLabel"
        aria-hidden="true"
        data-bs-theme="dark">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-white" id="resetModalLabel">
                Reset
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="text-white fs-5">Would you like to reset the app?</p>
              <p className="text-white">(This would include all values and modules)</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" onClick={resetLocalStorage}>
                Yes
              </button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetModal;
