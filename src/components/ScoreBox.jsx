import { useGameContext } from "../context/GameContex"
export const ScoreBox = () => {
  const {game} = useGameContext()
  return (
    <div className="flex justify-between items-center border-2 border-dark rounded-lg p-4 m-2 w-full">
        <div className="text-white leading-5 text-xl">
            ROCK <br />
            PAPER <br />
            SCISSORS
        </div>
        <div className="rounded-lg h-[5rem] bg-white w-[5rem] text-center font-semibold">
            <h4><small>SCORE</small></h4>
            <span className="text-[2rem]">{game.points}</span>
        </div>
    </div>
  )
}
