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

  return <FontAwesomeIcon icon={faPlus} className="fs-1" />;
};

export default ModuleSelector;
