import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import ResetModal from "./ResetModal";

const Nav = ({ onClose }) => {
  return (
    <nav className="navbar bg-dark">
      <form className="container-fluid">
        <a className="navbar-brand text-light" href="#home">
          Vital Sum
        </a>
        <div className="">
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faUserGroup} className="me-1" />
            Players
          </button>
          <ResetModal />
          <button
            id="settings"
            type="button"
            className="btn btn-dark  ms-2"
            data-bs-toggle="modal"
            data-bs-target="#settings">
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Nav;
