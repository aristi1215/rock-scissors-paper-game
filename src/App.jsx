import './App.css'
import { Game } from './pages/Game'
import { GameContexProvider } from './context/GameContex'

function App() {
  return (
    <GameContexProvider>
      <Game />
    </GameContexProvider>
  )
}

export default App
