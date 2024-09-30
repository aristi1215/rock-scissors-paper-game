import { useGameContext } from "../context/GameContex"
export const PopupRules = () => {
  const {game, setGame} = useGameContext()
  const handlePage = () => {
    setGame({ ...game, currentPage: game.commingPage ? game.commingPage : 1 });
  };


  return (
    <div className="bg-white p-8 rounded-lg h-screen flex flex-col justify-around items-center w-screen shrink-0" onClick={handlePage}>
        <h2 className="text-3xl font-semibold ">RULES</h2>
        <img className="w-[20rem]" src="/images/image-rules.svg" alt="" />
        <img className="w-6" src="/images/icon-close.svg" alt="" />
    </div>
  )
}
