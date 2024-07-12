import React from "react";
import ResetModal from "./ResetModal";
import PlayerToggle from "./PlayerToggle";

const Nav = () => {
  return (
    <nav className="navbar bg-dark">
      <form className="container-fluid">
        <a className="navbar-brand text-light" href="#home">
          Vital Sum
        </a>
        <div className="">
          <PlayerToggle />
          <ResetModal />
        </div>
      </form>
    </nav>
  );
};

export default Nav;
