import { Card } from "./Card";
import data from '../data/data.json'
import shuffle from 'lodash.shuffle'
 

export function Game() {
 const superheroes = data[0].superheroes.concat(data[0].superheroes)

console.log(superheroes)

  return (
    <div className="bg-cover bg-no-repeat bg-center min-h-screen bg-[url('background.jpg')]">
      <div className="backdrop-opacity-95 backdrop-invert bg-white/30 h-full"></div>
      <div className="flex flex-col items-center">
        <div className="text-center mt-10">
          <h1 className="font-marvel text-black text-6xl md:text-7xl">
            Superhero Memory Game
          </h1>
        </div>
        <div className="grid grid-cols-6 gap-2 mt-4">
        {shuffle(superheroes).map((card, ind) => {
        return <Card {...card} key={card.name + ind}/>
      })}
        </div>
      </div>
    </div>
  );
}

