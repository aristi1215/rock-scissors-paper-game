import { useGameContext } from "../context/GameContex"
export const Rules = ({commingPage}) => {
  const {game, setGame} = useGameContext()
  return (
    <button className="w-[10rem] border-2 border-white rounded-lg py-2 text-white" onClick={() => setGame({...game, currentPage: 0, commingPage: commingPage})}>
        Rules
    </button>
  )
}
