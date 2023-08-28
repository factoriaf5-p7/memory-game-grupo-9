import { Restart } from "./Items/Restart";
import { useState, useRef, useEffect } from "react";
import Win from "./Items/Win";
import  Card  from "./Card";
import data from "../data/data.json";
import shuffle from "lodash.shuffle";
import { Settings } from "./Settings";
import Score from "./Score/Score";
import  useGame from "@/hooks/useGame";

export default function Board() {
  const {board, bestScore, shouldDisableAllCards, handleCardClick, checkIsFlipped, checkIsInactive, showModal, moves} = useGame(data)
 
  return (
    <div className="flex gap-6 justify-center aspect-square  items-center h-screen" data-testid="board">
      <div className="bg-gray-200 rounded-lg p-4 shadow-md w-100px h-100px">
        <Score matches={bestScore} moves={moves} />
        <div className="grid grid-cols-6 gap-2 mt-4 board">
          {board.map((card, index) => {
            return (
              <Card
              key={index}
              card={card}
              index={index}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
            );
          })}
          { showModal && <Win />}
        </div>
                <div className="Restart">
          <Settings />
        </div>
      </div>
    </div>
  );
}
