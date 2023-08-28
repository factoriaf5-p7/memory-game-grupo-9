import { useState, useRef, useEffect } from "react";
import shuffle from "lodash.shuffle";

 const useGame = (data) => {
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

  return {shouldDisableAllCards, checkIsFlipped, checkIsInactive, showModal, handleCardClick, handleRestart, bestScore, moves, clearedCards, board}
}

export default useGame