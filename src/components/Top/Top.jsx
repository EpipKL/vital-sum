import Nav from "./Navigation/Nav";
import LifeBox from "./Life/LifeBox";
import ManaBox from "./Mana/ManaBox";

const Top = () => {
  return (
    <section className="h-50 bg-white d-flex flex-column">
      <Nav />
      <LifeBox />
      <ManaBox />
    </section>
  );
};

export default Top;
