import React from 'react';

export function Win() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
       <div
          className="hover:bg-opacity-80 text-black font-bold text-[25px] py-2 px-4 rounded mt-2 bg-[url('carta.jpg')] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/start.jpg')` }}
        >
          ¡Felicitaciones 
          has 
          ganado!
        </div>
      </div>
    
  );
}
