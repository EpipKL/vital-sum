import PlayerMenu from "./Players/PlayerMenu";
import TopModule from "./ModuleSelector/TopModule";
import BottomModule from "./ModuleSelector/BottomModule";
import { usePlayerMenu } from "../../PlayerMenuContext";

const Bottom = () => {
  const { playerMenuVisible } = usePlayerMenu();

  let content;
  if (playerMenuVisible) {
    content = <PlayerMenu />;
  } else {
    content = (
      <>
        <TopModule />
        <BottomModule />
      </>
    );
  }

  return (
    <section className="h-50 bg-white">
      <>{content}</>
    </section>
  );
};

export default Bottom;
