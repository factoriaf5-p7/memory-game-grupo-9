import { useState, useEffect } from 'react';

export function Start() {
  const [clicked, setClicked] = useState(false);

    useEffect(() => {
    const timeout = setTimeout(() => {
      if (!clicked) {
        window.location.href = '/game';  
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [clicked]);

  const handleClick = () => {
    setClicked(true);
    window.location.href = '/game'; 
  };

  return (
    <button
      className="hover:bg-opacity-80 text-black font-bold text-[25px] py-10 px-20 rounded-lg mt-2 bg-[url('carta.jpg')] bg-no-repeat bg-cover cursor-pointer hover:origin-top"
      style={{ backgroundImage: `url('/start.jpg')` }}
      onClick={handleClick}
    >
      🎮 s t a r t 🎮
    </button>
  );
}
