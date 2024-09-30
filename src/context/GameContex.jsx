import { useContext, createContext, useState } from "react"

const GameContex = createContext()

export const useGameContext = () => useContext(GameContex)

export const GameContexProvider = ({children}) => {
    const [game, setGame] = useState({
        currentPage: 0,
        result: '',
        points: 0,
        userPick: '',
        computerPick: '',
        commingPage: 1
    })
  return (
    <GameContex.Provider value={{game, setGame}}>
        {children}
    </GameContex.Provider>
  )
}
