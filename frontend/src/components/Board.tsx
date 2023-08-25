import { Restart } from "./Buttons/Restart";
import { Start } from "./Buttons/Start";

 

export default function Board() {
  return (
    <div className="bg-gray-200 rounded-lg p-4 shadow-md">
         <div className="Start"><Start/></div>

<div className="Restart"><Restart/></div>
    </div>
  );
}
