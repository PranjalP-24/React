import { useState } from "react";

const App =() =>{

  const [title, setTitle] = useState('srivi')

  const submitHandler =(e)=>{
    e.preventDefault()
    console.log('Form Submitted by', title);
    setTitle('')
  }

  return(
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        type='text' 
        placeholder="Enter your name"
        value={title}  //and here we are seeing the value of title as our value
        onChange={(e)=>{
          setTitle(e.target.value)  //so jab bhi yaha changes kiye toh title ki value change hui
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default App