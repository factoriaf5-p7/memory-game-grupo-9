import { Restart } from "./Buttons/Restart";
import { Card } from "./Card";
import data from "../data/data.json";
import shuffle from "lodash.shuffle";
import { useRef, useEffect, useState } from "react";
import { CardProps } from "./Card";

const superheroes = shuffle(data[0].superheroes.concat(data[0].superheroes));
export default function Board() {
  const [clicked, setClicked] = useState<boolean>(false)
  const [played, setPlayed] = useState([])
  const [board, setBoard] = useState([])
  let cardRef = useRef<HTMLDivElement>()
  const handleClick = () => {
    console.log('ddd', clicked)
    setClicked(!clicked)
  }
  useEffect(() => {
    console.log(played, 'played', played.length)
    if(played.length >= 2) {
      console.log(played.at(-2).dataset.cardName ,played.at(-1).dataset.cardName)
      played.at(-2).classList.toggle('flip')
    }
  },[played])
  
  useEffect(() => {
    setBoard(shuffle(data[0].superheroes.concat(data[0].superheroes)))
    console.log(board)
}, [])
  // console.log(superheroes, cardRef);
  return (
    <div className="flex gap-6 justify-center aspect-square  items-center h-screen">
      <div className="bg-gray-200 rounded-lg p-4 shadow-md w-100px h-100px">
        <div className="grid grid-cols-6 gap-2 mt-4">
          {board.map((card, ind) => {
            return (
                <Card {...card} key={card.name + ind} toggle={setPlayed} isClicked={clicked} />
            );
          })}
        </div>
        <div className="Restart">
          <Restart />
        </div>
      </div>
    </div>
  );
}
