import React from 'react';

const Start: React.FC = () => {
  return (
    <button
      className="hover:bg-opacity-80 text-black font-bold text-[25px] py-2 px-4 rounded mt-2 bg-[url('carta.jpg')] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('/start.jpg')` }}
    >
      🎮 J u g a r 🎮
    </button>
  );
};

export default Start;
