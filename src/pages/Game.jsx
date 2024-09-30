import {PopupRules} from '../components/PopupRules'
import { Selection } from './Selection'
import { useGameContext } from '../context/GameContex'
import { SelectionPicked } from './selectionPicked'
import { Result } from './Result'

export const Game = () => {
  const {game} = useGameContext()
  return (
    <>
    <div className="w-full h-screen overflow-hidden">
      <div className="flex h-full" style={{ transform: `translateX(-${game.currentPage * 100}vw)`, transition: 'transform 0.5s ease' }}>

        <PopupRules />
        <Selection />
        <SelectionPicked />
        <Result />

      </div>
    </div>
  </>
  )
}
