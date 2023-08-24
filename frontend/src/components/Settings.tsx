import { useEffect, useState } from "react";
import FormSettings from "./FormSettings";

 
export function Settings() {
const [ themas , setThemas ] = useState(); 
const [ difficulty , setDifficulty ] = useState(); 
useEffect(() => {
  fetch('http://localhost:3000/game/settings')
   .then(data => { return data.json(); 
  })
  .then(setting => {
   setThemas(setting.themas)
   setDifficulty(setting.difficulty)
  });
}, []
)

   return (
    <div> 
     { themas && <FormSettings title="Elegir Tema" options={themas} />}
     { difficulty && <FormSettings title="Elegir dificultad " options={difficulty} />}
    </div>
  )
}
