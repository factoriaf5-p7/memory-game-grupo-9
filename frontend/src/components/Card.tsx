
import { useState } from 'react';

interface CardProps {
  name: string;
  img: string;
}

export function Card({ name, img }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (e) => {
    setIsFlipped(!isFlipped);
    console.table(e.target)
  };

  return (
    <div className={`card-box h-28 aspect-square ${isFlipped ? 'flipped' : ''} `} onClick={handleCardClick} data-testid="card" data-image={name}>
       <div className={`card w-full h-full transition-transform duration-500 transform ${isFlipped ? 'rotate-y-180' : ''} bg-[url('carta.jpg')]`}>
       <div className={`side front p-2 rounded-md shadow-md ${isFlipped ? 'hidden' : ''}`} data-testid="front-side">
        </div>
        <div className={`side back bg-white p-2 rounded-md shadow-md ${isFlipped ? '' : 'hidden'}`} data-testid="back-side">
  <img src={`/img/${img}`} alt={`Imagen de ${img}`} loading="lazy" className="w-full h-full" />
</div>
      </div>
    </div>
  );
}
