import {Game, Settings} from "@/components";
import {render,screen} from '@testing-library/react';
import {
  MemoryRouter, createMemoryRouter, RouterProvider
} from "react-router-dom";

const routes = [
    {
        path: '/',
        // Component: Hero,
        // element: <Game />,
        // loader: 
        // action:
        children: [
            // {
            //     index: true,
            //     element: <Hero />,
            //     errorElement: <NotFound />
            // },
            {
                path:'game',
                element: <Game />,
                // loader: GameLoader
                // errorElement: <NotFound />
            },
            {
                path:'settings',
                element: <Settings />,
                // errorElement: <NotFound />
            }
        ]
    }
]
describe('Game Page',async ()=>{
    beforeEach(()=>{
        render(<MemoryRouter initialEntries = {["/game"]}>
          <Game/>
        </MemoryRouter>)
    });
    test('text Game should be render',()=>{
        // expect(screen.getByText(/gamse/i)).toBeInTheDocument();
        expect(screen.getAllByAltText(/Imagen de flash.jpg/i).length).toBe(2);
    })
})