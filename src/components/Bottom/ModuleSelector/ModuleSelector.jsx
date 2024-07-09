import React, { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { modules } from "./Modules/modulesData";

const ModuleSelector = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const selectModule = (module) => {
    setSelectedModule(module);
    closeMenu();
  };

  return (
    <div className="app-container" onClick={openMenu}>
      <div className="current-content">
        {/* Current Content */}
        {selectedModule ? <selectedModule.component /> : <div></div>}
      </div>
      {isMenuOpen && (
        <div className="module-menu">
          <ul>
            {modules.map((module) => (
              <li key={module.id} onClick={() => selectModule(module)}>
                {module.name}
              </li>
            ))}
          </ul>
          <button onClick={closeMenu}>Close Menu</button>
        </div>
      )}
      {isMenuOpen}
      <FontAwesomeIcon icon={faPlus} className="fs-1" />
    </div>
  );
};

export default ModuleSelector;
