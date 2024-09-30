import { ScoreBox } from "../components/ScoreBox"
import { OptionSelection } from "../components/OptionSelection"
import { Rules } from "../components/Rules"
export const Selection = () => {
  return (
    <main className='bg-gradient-to-b from-bg-gradient-light to-bg-gradient-dark h-screen flex flex-col items-center justify-around w-screen shrink-0'>
      <div className="w-[90%]">
        <ScoreBox />
      </div>
        <OptionSelection />
        <Rules commingPage={1} />
    </main>
  )
}
