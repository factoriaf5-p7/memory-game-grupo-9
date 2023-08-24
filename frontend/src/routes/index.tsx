import { Hero, Game, Settings, NotFound } from "@/components";
import { Route, createBrowserRouter, RouterProvider } from "react-router-dom";

export const Routes = (
    <Route>
        <Route path="/" element={<Hero />}/>
        <Route path="/settings" element={<Settings />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<NotFound />} />
    </Route>
)

// Home
interface HomeLoaderData {
    date: string;
  }

export function sleep(n: number = 500) {
    return new Promise((r) => setTimeout(r, n));
  }

export async function GameLoader(): Promise<HomeLoaderData> {
    await sleep();
    return {
      date: new Date().toISOString() + 'hoole',
    };
  }

export const router = createBrowserRouter([
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
                loader: GameLoader
                // errorElement: <NotFound />
            },
            {
                path:'settings',
                element: <Settings />,
                // errorElement: <NotFound />
            }
        ]
    }
])