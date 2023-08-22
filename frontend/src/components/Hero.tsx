import { Card } from "./Card"
import data from '../data/data.json'
export  function Hero() {
  return (
    <div>
      Hero
      {data.map((card, i) => {
        return <Card {...card} key={card.name + i}/>
      })}
      
    </div>
  )
}
