import Board from "./Board";
 

export function Game() {

  return (
    <div className="bg-cover bg-no-repeat bg-center min-h-screen bg-[url('background.jpg')]">
      <div className="backdrop-opacity-95 backdrop-invert bg-white/30 h-full"></div>
      <div className="flex flex-col items-center">
        <div className="text-center mt-10">
          <h1 className="font-marvel text-black text-6xl md:text-7xl">
            Superhero Memory Game
          </h1>
        </div>
       <Board/>
        </div>
      </div>

  );
}

