import {Game, Settings} from "@/components";
import {render,screen} from '@testing-library/react';
import {
  MemoryRouter, createMemoryRouter, RouterProvider
} from "react-router-dom";


describe('Game Page',async ()=>{
    beforeEach(()=>{
        render(<MemoryRouter initialEntries = {["/game"]}>
          <Game/>
        </MemoryRouter>)
    });
    test('text Game should be render',()=>{
        // expect(screen.getByText(/gamse/i)).toBeInTheDocument();
        expect(screen.getByText(/Superhero Memory Game/i)).toBeInTheDocument();
    })
})