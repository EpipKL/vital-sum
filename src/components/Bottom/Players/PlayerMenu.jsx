import PlayerList from "./PlayerList";

const PlayerMenu = () => {
  return (
    // Component
    <div className="w-100 h-100 bg-light">
      {/* Container */}
      <div className="player-border w-100 h-100">
        {/* Grid System */}
        <div className="d-flex flex-column">
          {/* Player list */}
          <PlayerList />
        </div>
      </div>
    </div>
  );
};

export default PlayerMenu;
