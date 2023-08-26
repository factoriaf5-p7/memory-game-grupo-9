
import React, { useState, useRef, useEffect } from 'react';

export interface CardProps {
  name: string;
  img: string;
  toggle: any
  isClicked: boolean
  cardInd: number
  cardR: any
}

export function Card({ name, img, toggle, cardInd, cardR, isClicked }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(isClicked);
  const [onPlay, setOnPlay] = useState([])
  let cardRef = useRef(null)

  const isCheck = (i) => {
    console.log(i)
  }

  const handleCardClick = (e) => {
    // const elemt = currentCard.current.dataset.image.toLowerCase().split('')[0]
    // setIsFlipped(!isFlipped);
    // toggle(!isClicked)
    // toggle(!isClicked);
    console.log(cardRef.current, 'cccrrr')
    // cons
    // console.log(currentCard.current.dataset.image.toLowerCase().split(' '))
    // console.log(onGame)
    toggle(prev => [...prev, cardRef.current])
    setIsFlipped(!isClicked);
  };
  // 
  useEffect(()=> {
    // console.log('jjj', cardRef.current)
    // setOnPlay([...onPlay, cardRef.current])
    // console.log(onPlay, 'onplay')
  },[isClicked])


  return (
    <div ref={cardRef} onClick={handleCardClick} className={`card-box h-28 aspect-square memory-card ${isFlipped ? '' : ''} `} data-testid="card" data-card-name={name}>
      <div className={`card w-full h-full transition-transform duration-500 transform ${isFlipped ? '' : ''} bg-[url('carta.jpg')]`}>
        <div className={`side flip front-face p-2 rounded-md shadow-md ${isFlipped ? 'hidden' : ''}`} data-testid="front-side">
        </div>
        <div className={`side back-face bg-white p-2 rounded-md shadow-md ${isFlipped ? '' : 'hidden'}`} data-testid="back-side">
          <img src={`/img/${img}`} alt={`Imagen de ${img}`} loading="lazy" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
