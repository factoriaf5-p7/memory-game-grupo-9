import { Restart } from "./Items/Restart";
import { useState, useRef, useEffect } from "react";
import Win from "./Items/Win";
import  Card  from "./Card";
import data from "../data/data.json";
import shuffle from "lodash.shuffle";
import { Settings } from ".";
import Score from "./Score/Score";

// const superheroes = shuffle(data[0].superheroes.concat(data[0].superheroes));
export default function Board() {
  // const [clicked, setClicked] = useState(false)
  // const [played, setPlayed] = useState([])
  const [board, setBoard] = useState(() => shuffle(data[0].superheroes?.concat(data[0].superheroes)))
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === data[0].superheroes.length) {
      setShowModal(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    console.log(clearedCards)
    enable();
    if (board[first].name === board[second].name) {
      console.log(openCards, 'oop', board[first].name)
      setClearedCards((prev) => ({ ...prev, [board[first].name]: true }));
      setOpenCards([]);
      return;
    }
    // This is to flip the board back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };
  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.name]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    // set a shuffled deck of board
    // setCards(shuffleCards(data[0].superheroes.concat(data[0].superheroes)));
  };
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
          <Restart />
        </div>
      </div>
    </div>
  );
}
