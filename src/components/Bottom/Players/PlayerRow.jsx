const PlayerRow = ({ player, setPlayers }) => {
  const { name, damage, editState, id } = player;

  const damageDown = () => {
    if (damage > 0) {
      setPlayers((prevPlayers) =>
        prevPlayers.map((prevPlayer) =>
          prevPlayer.id === id ? { ...prevPlayer, damage: prevPlayer.damage - 1 } : prevPlayer
        )
      );
    }
  };

  const damageUp = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((prevPlayer) =>
        prevPlayer.id === id ? { ...prevPlayer, damage: prevPlayer.damage + 1 } : prevPlayer
      )
    );
  };

  const editName = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((prevPlayer) =>
        prevPlayer.id === id ? { ...prevPlayer, editState: true } : prevPlayer
      )
    );
  };

  const changeName = (e) => {
    const newName = e.target.value;
    setPlayers((prevPlayers) =>
      prevPlayers.map((prevPlayer) =>
        prevPlayer.id === id ? { ...prevPlayer, name: newName } : prevPlayer
      )
    );
  };

  const editNameBlur = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((prevPlayer) =>
        prevPlayer.id === id ? { ...prevPlayer, editState: false } : prevPlayer
      )
    );
  };

  return (
    <div className="my-1 d-flex flex-row justify-content-between align-items-center text-center border-bottom border-2 border-dark">
      {/* Left Row */}
      {editState ? (
        <input
          type="text"
          className="p-1 ms-1 mb-1"
          value={name}
          onChange={changeName}
          onBlur={editNameBlur}
          autoFocus
        />
      ) : (
        <div className="p-1 ms-1 mb-1" onClick={editName}>
          {name}
        </div>
      )}
      {/* Right Row */}
      <div className="d-flex flex-row me-1 mb-1">
        {/* Minus Sign */}
        <div
          className="py-1 px-3 bg-danger text-white rounded user-select-none"
          onClick={damageDown}>
          -
        </div>
        {/* Damage Total */}
        <div className="p-1 mx-2">{damage}</div>
        {/* Plus Sign */}
        <div
          className="py-1 px-3 bg-success text-white rounded user-select-none"
          onClick={damageUp}>
          +
        </div>
      </div>
    </div>
  );
};

export default PlayerRow;
