import { useState } from "react";

const LifeBox = () => {
  const [life, setLife] = useState(40);

  const lifeLoss = () => {
    setLife(life - 1);
  };

  const lifeGain = () => {
    setLife(life + 1);
  };

  return (
    // Parent Container
    <div className="w-100 h-100 position-relative d-flex flex-row align-items-center text-center">
      {/* Minus */}
      <div className="h-100 w-100 bg-danger opacity-25 cursor-pointer" onClick={lifeLoss}>
        -
      </div>

      {/* Life */}

      <div className="life z-1">{life}</div>

      {/* Plus */}
      <div className="h-100 w-100 bg-success opacity-25 cursor-pointer" onClick={lifeGain}>
        +
      </div>
    </div>
  );
};

export default LifeBox;
