 
import { Start } from './Items/Start';

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-center bg-cover" style={{ backgroundImage: `url('/fondo.jpg')` }}>
      <div className="Titulo mb-8">
        <h1 className="text-9xl font-bold text-red-800 text-stroke-2 text-transparent">Memory Game</h1>
      </div>
      
      <div className="Button animate-pulse">
        <Start />
      </div>
    </div>
  );
}
