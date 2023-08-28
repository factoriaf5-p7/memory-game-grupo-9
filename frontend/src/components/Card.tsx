import React from "react";
// import pokeball from "./images/pokeball.png";
// import "./card.scss";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {

  // console.log(card)

  const handleClick = (e) => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={`card 
        ${isFlipped ? "is-flipped" : ''} 
        ${isInactive ? "is-inactive" : ''} 
        
      `}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src='/carta.jpg' alt="pokeball" />
        
      </div>
      <div className="card-face card-back-face">
      
        <img src={`img/${card.img}`} alt={`Imagen de ${card.name}`} />
      </div>
    </div>
  );
};

export default Card;