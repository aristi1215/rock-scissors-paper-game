import { Option } from "./Option"
import { useGameContext } from "../context/GameContex"

export const OptionSelection = () => {
  const options = ['rock','scissors', 'paper']
  const {game, setGame} = useGameContext()
  const handleOptionSelection = (option) => {
    setGame({...game, currentPage: 2, userPick: option, computerPick: options[Math.round(Math.random() * 2)] })
  }
  return (
    <div className="w-[18rem] h-[18rem]">
        <div className="bg-[url(/images/bg-triangle.svg)] bg-no-repeat bg-[length:16rem_12rem] bg-center h-full flex flex-col justify-between items-center">
        <div className="flex justify-between w-full">
          <div onClick={() => handleOptionSelection('paper')}>
            <Option borderColor={'border-blue-500'} option={'paper'} />
          </div>
          <div onClick={() => handleOptionSelection('scissors')}>
            <Option borderColor={'border-yellow-500'} option={'scissors'} />
          </div>
        </div>
        <div onClick={() => handleOptionSelection('rock')}>
          <Option borderColor={'border-red-500'} option={'rock'} />
        </div>
        </div>
    </div>
  )
}
