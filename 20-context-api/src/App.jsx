import { useState } from "react"
import Navbar from "./components/Navbar"

const App =()=>{

  const[theme, setTheme] = useState('Light')

  //setTheme is a function that does the work of changing the theme.
  return(
    <div>
      <h1>Theme is {theme}</h1>

      <Navbar theme={theme} setTheme={setTheme}/> 
    </div>
  )
}

export default App