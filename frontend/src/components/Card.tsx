
import { useState } from 'react';

interface CardProps {
  name: string;
  img: string;
}

export function Card({ name, img }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card-box ${isFlipped ? 'flipped' : ''} `} onClick={handleCardClick} data-testid="card">
       <div className={`card w-full h-full transition-transform duration-500 transform ${isFlipped ? 'rotate-y-180' : ''} bg-[url('carta.jpg')]`}>
       <div className={`side front p-2 rounded-md shadow-md ${isFlipped ? 'hidden' : ''}`} data-testid="front-side">
          Hola!
        </div>
        <div className={`side back bg-white p-2 rounded-md shadow-md ${isFlipped ? '' : 'hidden'}`} data-testid="back-side">
  <img src={`/img/${img}`} alt={`Imagen de ${img}`} data-image={name} loading="lazy" className="w-full h-full" />
</div>
      </div>
    </div>
  );
}
