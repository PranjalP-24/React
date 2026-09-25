import { useState } from "react"

//we use this method when we have to change a variable which is saved inside an array or object

const App =() =>{
  
  const[num, setNum] = useState(10)

  const btnClicked = () =>{
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
  }

  return(
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App