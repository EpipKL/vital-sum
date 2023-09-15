import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import PlayerModal from "./PlayerModal";
import ResetModal from "./ResetModal";

const Nav = () => {
  return (
    <nav className="navbar bg-dark">
      <form className="container-fluid">
        <a className="navbar-brand text-light" href="#home">
          Vital Sum
        </a>
        <div className="">
          <PlayerModal />
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
