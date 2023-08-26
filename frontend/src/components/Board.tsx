import { Restart } from "./Buttons/Restart";
import { Card } from "./Card";
import data from "../data/data.json";
import shuffle from "lodash.shuffle";
import { Settings } from ".";

export default function Board() {
  const superheroes = data[0].superheroes.concat(data[0].superheroes);

  console.log(superheroes);
  return (
    <div className="flex gap-6 justify-center aspect-square  items-center h-screen">
      <div className="bg-gray-200 rounded-lg p-4 shadow-md w-100px h-100px">
        <div className= "Settings"><Settings/></div>
        <div className="grid grid-cols-6 gap-2 mt-4">
          {shuffle(superheroes).map((card, ind) => {
            return <Card {...card} key={card.name + ind} />;
          })}
        </div>
        <div className="Restart">
          <Restart />
        </div>
      </div>
    </div>
  );
}
