import { useEffect, useState } from "react";
import FormSettings from "./FormSettings";
import { Dificulty } from "./FormSettings";
 
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
<<<<<<< HEAD
     <FormSettings title="Elegir Tema" options={["superheroes", "kombat" ]} />
     <FormSettings title="Elegir dificultad " options={[0, 1, 2]} />
=======
     { themas && <FormSettings title="Elegir Tema" options={themas} />}
     { difficulty && <FormSettings title="Elegir dificultad " options={[0, 1, 2]} />}
>>>>>>> e01a76179b2c328c8404108e65f773895aa099aa
    </div>
  )
}
