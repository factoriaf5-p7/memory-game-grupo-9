export function Game() {
  const imageSources = Array(24).fill('carta.jpg');

  const imageElements = imageSources.map((source, index) => (
    <div key={index} className="w-25 h-20">
      <img src={source} alt="" loading="lazy" className="object-cover w-full h-full" />
    </div>
  ));

  return (
    <div className="bg-cover bg-no-repeat bg-center min-h-screen bg-[url('background.jpg')]">
      <div className="backdrop-opacity-95 backdrop-invert bg-white/30 h-full"></div>
      <div className="flex flex-col items-center">
        <div className="text-center mt-10">
          <h1 className="font-marvel text-black text-6xl md:text-7xl">
            Superhero Memory Game
          </h1>
        </div>
        <div className="grid grid-cols-6 gap-2 mt-4">
          {imageElements}
        </div>
      </div>
    </div>
  );
}