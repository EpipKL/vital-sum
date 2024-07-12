import { useState, useEffect, useRef } from "react";

const LifeBox = () => {
  const [life, setLife] = useState(() => {
    const storedLife = localStorage.getItem("life");
    return storedLife ? JSON.parse(storedLife) : 40;
  });

  const intervalRef = useRef(null);

  const lifeLoss = () => {
    setLife((prevLife) => (prevLife - 1 >= 0 ? prevLife - 1 : 0)); // Ensure life doesn't go below 0
  };

  const lifeGain = () => {
    setLife((prevLife) => prevLife + 1);
  };

  const startLifeLoss = () => {
    intervalRef.current = setInterval(() => {
      setLife((prevLife) => (prevLife - 10 >= 0 ? prevLife - 10 : 0));
    }, 500);
    lifeLoss();
  };

  const startLifeGain = () => {
    intervalRef.current = setInterval(() => {
      setLife((prevLife) => prevLife + 10);
    }, 500);
    lifeGain();
  };

  const stopLifeChange = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleTouchStartLoss = () => {
    startLifeLoss();
  };

  const handleTouchStartGain = () => {
    startLifeGain();
  };

  const handleTouchEnd = () => {
    stopLifeChange();
  };

  useEffect(() => {
    localStorage.setItem("life", JSON.stringify(life));
  }, [life]);

  return (
    // Parent Container
    <div className="w-100 h-100 position-relative d-flex flex-row align-items-center text-center">
      {/* Minus */}
      <div
        className="h-100 w-100 bg-danger opacity-25 cursor-pointer"
        onTouchStart={handleTouchStartLoss}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}></div>

      {/* Life */}
      <div className="life z-1">{life}</div>

      {/* Plus */}
      <div
        className="h-100 w-100 bg-success opacity-25 cursor-pointer"
        onTouchStart={handleTouchStartGain}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}></div>
    </div>
  );
};

export default LifeBox;
