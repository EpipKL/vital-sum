import PlayerMenu from "./PlayerMenu";
import One from "./Test/One";
import Two from "./Test/Two";

const Bottom = () => {
  return (
    <div className="h-50 bg-white">
      <PlayerMenu />

      <One></One>
      <Two></Two>
    </div>
  );
};

export default Bottom;
