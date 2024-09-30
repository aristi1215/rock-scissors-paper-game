import { ScoreBox } from "../components/ScoreBox"
import { Option } from "../components/Option"
import { Rules } from "../components/Rules"
import { useGameContext } from "../context/GameContex"
import { useEffect } from "react"

export const Result = () => {
    const {game, setGame} = useGameContext()

    useEffect(()=>{
        console.log(game)
    },[game])

    const handlePlayAgain = () => {
        game.result === 'D' ? setGame({
            currentPage: 1,
            result: '',
            points: 0,
            userPick: '',
            computerPick: '',
        }) : setGame({...game, currentPage: 1})
    }

    const handleResultText = ()=>{
        if(game.result === 'W'){
            return 'YOU WIN'
        }else if (game.result === 'D'){
            return 'YOU LOSE'
        }else{
            return 'YOU MATCH'
        }
    }

  return (
    <main className="bg-gradient-to-b from-bg-gradient-light to-bg-gradient-dark h-screen flex flex-col items-center w-full justify-between py-10 shrink-0 overflow-hidden">
        <div className="h-[80%] flex flex-col justify-between items-center w-[90%]">
        <ScoreBox />
        <div className="flex w-full justify-between">
            <div className="text-center text-white relative">
                <div className="absolute bg-gray-600/15 top-[-1rem] left-[-1rem] w-[10rem] h-[10rem] rounded-full">

                </div>
                <div className="absolute bg-gray-500/10 top-[-3rem] left-[-3rem] w-[14rem] h-[14rem] rounded-full">

                </div>
                <div className="absolute bg-gray-400/5 top-[-5rem] left-[-5rem] w-[18rem] h-[18rem] rounded-full">

                </div>
                <Option option={game.userPick || 'rock'} />
                <h3 className="mt-5">YOU PICKED</h3>
            </div>
            <div className="text-center text-white ">
                <Option option={game.computerPick || 'rock'} />
                <h3 className="mt-5">THE HOUSE PICKED</h3>
            </div>
        </div>
            <div className="text-white text-center">
                <h2 className="text-[3em] mb-3 font-bold ">{handleResultText()}</h2>
                <button onClick={handlePlayAgain} className="bg-white text-bg-gradient-dark w-[12rem] py-2 rounded-lg text-xl">PLAY AGAIN</button>
            </div>
        </div>
        <Rules commingPage={3} />
    </main>
  )
}
