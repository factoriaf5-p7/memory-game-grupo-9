import FormSettings from "./FormSettings";

 
export function Settings() {

  return (
    <div> 
     <FormSettings title="Elegir Tema" options={["superheroes", "kombat" ]} />
     <FormSettings title="Elegir dificultad " options={[0, 1, 2]} />
    </div>
  )
}
