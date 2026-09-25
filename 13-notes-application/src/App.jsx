import { useState } from "react";
import {X} from 'lucide-react'

const App = () =>{

  const[title, setTitle] = useState('')
  const[details, setDetails] = useState('')

  const[task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault();

    const copyTask = [...task];  // we made a copy of our task

    copyTask.push({title, details})  //fill data in the copy

    setTask(copyTask)  //copy ko original se replace kar diya
    

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task];

    //splice --> break things
    copyTask.splice(idx, 1)  //idx wale element se start karna todna and 1 element ko todna

    setTask(copyTask)
  }
  

  return(
    <div className="h-screen overflow-auto scrollbar-none lg:flex bg-black text-white">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col iteRecent Notesms-start'>
        
      <h1 className="text-4xl font-bold">Add Notes</h1>


      {/* PEHLA INPUT FOR HEADING*/}

        <input 
          type='text' 
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-semibold py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />


      {/* DETAILED WALA INPUT */}

        <textarea 
          type='text' 
          className="px-5 w-full scrollbar-none h-32 py-2 border-2 outline-none rounded"
          placeholder="Write Details here"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        <button className="bg-white active:scale-95 w-full outline-none text-black px-5 py-2 rounded">Add Notes</button>

      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10 ">
        <h1 className="text-4xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap items-start justify-start gap-30 mt-6 h-[90%] scrollbar-none overflow-auto">
          {task.map(function(elem, idx){

            return <div key={idx} className="flex flex-wrap justify-between flex-col items-start relative h-72 w-72 rounded-xl bg-cover text-black px-10 py-4 bg-[url('https://imgs.search.brave.com/Mw8URhFZL-8itoqjt0zj5d7P7rCVntCc-JS0H7kep_Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/ODc5Lzg5OS9zbWFs/bC9jb2xvcmVkLXBv/c3QtaXQtbm90ZS1w/YXBlci1yb3VuZGVk/LWVkZ2VzLXN0aWNr/eS1ub3Rlcy1mb3It/cmVtaW5kZXJzLXBu/Zy5wbmc')]">
            <div>  
              <h2 onClick={()=>{
                deleteNote(idx)
              }} className="absolute top-3 right-9 cursor-pointer active:scale-95 rounded-full bg-red-500 text-white"><X size={28} strokeWidth={3} /></h2>
              <h3 className="leading-tight text-l font-bold">{elem.title}</h3>
              <p className="mt-3 leading-tight text-xs font-medium text-gray-700">{elem.details}</p>
            </div>
            {/* <button  onClick={()=>{
              deleteNote(idx)
            }} className="cursor-pointer active:scale-95 text-s rounded-full absolute bottom-6 right-10 w-1/2 bg-red-500 text-white">Delete</button> */}
          </div>  
          })}
        </div>
         
      </div>

    </div>
  )
}

export default App