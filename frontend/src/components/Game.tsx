import { Card } from "./Card";
import data from '../data/data.json'
import shuffle from 'lodash.shuffle'
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import Board from "./Board";
 
// interface UserDetails {
//   id: number;
//   name: string;
// }

// interface HomeLoaderData {
//   date: string;
// }

export function Game() {
//   let dataLoader = useLoaderData() as HomeLoaderData;
//   const { isLoading, error, dataa } = useQuery({
//     queryKey: ['repoData'],
//     queryFn: () =>
//       fetch('https://api.github.com/repos/TanStack/query').then(
//         (res) => res.json(),
//       ),
//   })
// console.log(dataa, error, dataLoader)

//  const superheroes = data[0].superheroes.concat(data[0].superheroes)


  return (
    <div className="bg-cover bg-no-repeat bg-center min-h-screen relative bg-[url('background.jpg')]">
      {/* <div className="absolute z-0 inset-0 backdrop-opacity-95 bg-white/40 h-full"></div> */}
      <div className="flex flex-col items-center">
        <div className="text-center mt-10">
          <h1 className="font-marvel relative z-10 text-black text-6xl md:text-7xl  text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Superhero Memory Game
          </h1>
        </div>
       <Board/>
        </div>
      </div>

  );
}

