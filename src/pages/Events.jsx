import {
  NavBar,
  Footer,
  KickOff,
  KickAthon,
  TreasureHunt,
  Bara,
  WattsUp,
} from "../components";

const Events = () => {
  return (
    <div className="bg-clr-black min-h-screen text-white font-Poppins">
      <NavBar />
      <div className="flex flex-col">
        <TreasureHunt />
        <Bara />
        <KickOff />
        <Bara />
        <KickAthon />
        <Bara />
        <WattsUp />
        <Bara />
      </div>
      <Footer />
    </div>
  );
};

export default Events;
