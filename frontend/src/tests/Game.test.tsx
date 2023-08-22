import {Game} from "@/components";
import {render,screen} from '@testing-library/react';
import {
  MemoryRouter,
} from "react-router-dom";

describe('Game Page',()=>{
    beforeEach(()=>{
        render(<MemoryRouter initialEntries = {["/game"]}>
          <Game/>
        </MemoryRouter>)
    });
    test('Superhero Memory Game',()=>{
        expect(screen.getByText(/game/i)).toBeInTheDocument();
    })
})