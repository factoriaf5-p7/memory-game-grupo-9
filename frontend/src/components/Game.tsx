import { Card } from "./Card";
import data from '../data/data.json'
import shuffle from 'lodash.shuffle'
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
 
interface UserDetails {
  id: number;
  name: string;
}

export function Game() {
const fetchGroups = async (): Promise<UserDetails[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(res.json())
    return res.json()
  }

const { dataa } = useQuery<UserDetails[], Error>({ queryKey: ['groups'],queryFn: fetchGroups})

console.log(dataa)

  return (
    <div className="bg-cover bg-no-repeat bg-center min-h-screen relative bg-[url('background.jpg')]">
      <div className="absolute z-0 inset-0 backdrop-opacity-95 bg-white/40 h-full"></div>
      <div className="flex flex-col items-center">
        <div className="text-center mt-10">
          <h1 className="font-marvel relative z-10 text-black text-6xl md:text-7xl  text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Superhero Memory Game
          </h1>
        </div>
        <div className="grid grid-cols-6 gap-2 mt-4">
        {shuffle(data).map((card, ind) => {
        return <Card {...card} key={card.name + ind}/>
      })}
        </div>
      </div>
    </div>
  );
}