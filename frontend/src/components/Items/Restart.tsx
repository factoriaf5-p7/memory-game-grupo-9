export function Restart() {
  return (
    <button
      className="hover:bg-opacity-80 text-black font-bold text-xs rounded mt-2 p-4 bg-[url('carta.jpg')] bg-no-repeat bg-cover "
      style={{
        backgroundImage: "url('/start.jpg')",
        padding: '5px', 
            }}
    >
      Reiniciar
    </button>
  );
}
