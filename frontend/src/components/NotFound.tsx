import { Card } from "./Card";
import { Restart } from "./Items/Restart";
import { Start } from "./Items/Start";
import Win from "./Items/Win";
import Score from "./Score/Score";
import { Settings } from "./Settings";
import data from "../data/data.json";
import shuffle from "lodash.shuffle";
import Timer from "./Score/Timer";

 

export  function NotFound() {
  const superheroes = data[0].superheroes.concat(data[0].superheroes);

  console.log(superheroes);
  return (
    <div>NotFound
      <div className="Start"><Start/></div>
      <div className="Ganaste"><Win onClose={function (): void {
        throw new Error("Function not implemented.");
      } }/></div>
      <div className="Contador"><Score moves={0} matches={0}/></div>
        <div className= "Settings"><Settings/></div>
        
        <div className="Restart">
          <Restart />
          </div>
          <div className="Tiempo"><Timer/></div>
  </div>
  )
}
