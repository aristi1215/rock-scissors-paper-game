import { ScoreBox } from "../components/ScoreBox"
import { Option } from "../components/Option"
import { Rules } from "../components/Rules"
import { useGameContext } from "../context/GameContex"
import { useState } from "react"
export const SelectionPicked = () => {
    const {game, setGame} = useGameContext()
    const [showResult, setShowResult] = useState(false)

    if(game.currentPage === 2 ){
        setTimeout(()=> {
            if(game.userPick === game.computerPick){
                setGame({...game,currentPage: 3, result: 'E' })
                setShowResult(false)
            }else if (game.userPick === 'rock' && game.computerPick === 'paper'){
                setGame({...game,currentPage: 3, result: 'D' })
                setShowResult(false)
            }else if (game.userPick === 'paper' && game.computerPick === 'scissors'){
                setGame({...game,currentPage: 3, result: 'D' })
                setShowResult(false)
            }else if (game.userPick === 'scissors' && game.computerPick === 'rock'){
                setGame({...game,currentPage: 3, result: 'D' })
                setShowResult(false)
            }else{
                setGame({...game,currentPage: 3, result: 'W', points: game.points+1 })
                setShowResult(false)
            }
        },[3000])
    }

  return (
    <main className="bg-gradient-to-b from-bg-gradient-light to-bg-gradient-dark h-screen flex flex-col items-center w-full justify-between py-10 shrink-0">
        <div className="h-[60%] flex flex-col justify-between w-[85%]">
        <ScoreBox />
        <div className="flex w-full justify-between">
            <div className="text-center text-white">
                <Option option={game.userPick || 'rock'} />
                <h3 className="mt-5">YOU PICKED</h3>
            </div>

            {showResult ?(
                <Option option={game.computerPick || 'rock'} />
            ): (<div>
                    <div className={`bg-bg-gradient-light/50 rounded-full h-[8rem] w-[8rem] shadow-inner-box flex items-center justify-center animate-bounce`}>
                    </div>
                    <h3 className="mt-5 text-center text-white">THE HOUSE PICKED</h3>
                </div>
            )
            }
        </div>
        </div>
        <Rules commingPage={2} />
    </main>
  )
}
