
export const Option = ({option}) => {
  const handleColor = () => {
    if(option === 'rock'){
      return 'border-red-500'
    } else if (option === 'paper'){
      return 'border-blue-500'
    }else{
      return 'border-yellow-500'
    }
  }
  return (
    <div className={`border-[1rem] ${handleColor()} bg-white rounded-full h-[8rem] w-[8rem] shadow-inner-box flex items-center justify-center`}>
        <img className="w-[3rem]" src={`images/icon-${option}.svg`} alt={`${option}`} />
    </div>
  )
}
