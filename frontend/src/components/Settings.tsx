import FormSettings from "./FormSettings";

 
export function Settings() {

  return (
    <div> 
     <FormSettings title="Elegir Tema" options={["superheroes", "kombat"]} />
     <FormSettings title="Elegir dificultad " options={["facil", "medio", "dificil"]} />
    </div>
  )
}
