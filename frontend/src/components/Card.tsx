interface CardProps {
  id: string
  name: string
  img: string
}

export function Card({name, img, id}: CardProps) {
  return (
    <div className="border-green-200 border-2 max-w-xs aspect-square grid place-center grid-flow-col">
      {/* <h3 className="text-amber-300">{name}</h3> */}
      <img src={`/img/${img}`} alt={`Image of ${img}`} className="w-full" />
    </div>
  )
}