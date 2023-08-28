import { useState, useEffect } from "react";
import FormSettings from "./FormSettings";
import ButtonsSettings from "./Items/ButtonsSettings";

export function Settings() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [themas, setThemas] = useState<string[] | null>(null);
  const [difficulty, setDifficulty] = useState<number | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/game/settings")
      .then((data) => data.json())
      .then((setting) => {
        setThemas(setting.themas);
        setDifficulty(setting.difficulty);
      });
    }, []);
    
    const handleShowDialog = () => {
      setDialogOpen(true);
    };
    
    const handleCloseDialog = (returnValue: string) => {
      setDialogOpen(false);
      console.log(`ReturnValue: ${returnValue}`);
    };
    
    const handleConfirm = () => {
      handleCloseDialog("default");
    };
    
    console.log(themas);
  return (
    <div className="relative">
      <ButtonsSettings
        onClick={handleShowDialog}
        label="Setting"
        backgroundImage="url('/start.jpg')"
        className="custom-button-class"
      />
      {dialogOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <dialog open className="z-50">
            <form>
              <div>
                <label>
                  {themas && (
                    <FormSettings title="Elegir Tema" options={themas} />
                  )}
                  {difficulty && (
                    <FormSettings title="Elegir dificultad" options={[0, 1, 2]} />
                  )}
                </label>
              </div>
              <div>
                <ButtonsSettings
                  onClick={() => handleCloseDialog("default")}
                  label="Cancelar"
                  backgroundImage="url('/start.jpg')"
                />
                <ButtonsSettings
                  onClick={handleConfirm}
                  label="Confirmar"
                  backgroundImage="url('/start.jpg')"
                />
              </div>
            </form>
          </dialog>
        </div>
      )}
    </div>
  );
}
