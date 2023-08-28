import { Card } from "./Card";
import { Restart } from "./Items/Restart";
import { Start } from "./Items/Start";
import Win from "./Items/Win";
import Score from "./Score/Score";
import { Settings } from "./Settings";
import data from "../data/data.json";
import shuffle from "lodash.shuffle";
import Timer from "./Score/Timer";
import ButtonsSettings from "./Items/ButtonsSettings";
import FormSettings from "./FormSettings";

 

export  function NotFound() {
  const superheroes = data[0].superheroes.concat(data[0].superheroes);

  console.log(superheroes);
  return (
    <div>NotFound
{/*        
    
      <div className="Contador"><Score moves={0} matches={0}/></div>
        <div className= "Settings"><Settings/></div>
        
        <div className="Restart">
          <Restart />
          </div>
          <div className="Tiempo"><Timer/></div>
   */}
          <div className="Tiempo"><h1>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h1></div>

          <div className="Tiempo"><ButtonsSettings/></div>
          <div className= "Settings"><Settings/></div>
          <div className= "Settings"><FormSettings/></div>
  </div>
  )
}
