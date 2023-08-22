interface CardProps {
  name: string
  img: string
}

const handleCardPlay = (e: MouseEvent<HTMLElement>) => {
  console.table(e.target.dataset.image)
}

export function Card({name, img}: CardProps) {
  return (
    <div onClick={handleCardPlay}  className="border-green-200 border-2 max-w-xs aspect-square grid place-center grid-flow-col">
      {/* <h3 className="text-amber-300">{name}</h3> */}
      <img src={`/img/${img}`} alt={`Image of ${img}`} data-image={name} className="w-full" loading="lazy"/>
    </div>
  )
}