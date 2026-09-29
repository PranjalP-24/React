//Here in this project we have used pagination
//we can also use infinite scrolling


import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './components/Card'

const App =() =>{

    const[userData, setUserData] = useState([])

    const[index, setIndex] = useState(1)

    const getData = async ()=>{
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=24`)

        setUserData(response.data)

    }

    useEffect(function(){
        getData()
    },[index])

    let printUserData = <h3 className='text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-xs'>Loading...</h3>
//printUserData naam ka ek variable bana hua tha jiske andar 'No User Available' stored hai


//getData ke chalne pe (jo ki button k click pe getData chalta hai) setData ke kaaran userData me value set ho raha hai
//agar userData ki length is more than 0 then printUserData me jaa kar userData ki value ko map kar do and hello return kar dena (ya jo bhi return karna hai vo return kar do)
    
    if(userData.length > 0){
        printUserData = userData.map(function(elem, idx){
            // return 'hello'
            // return idx

            //sabko a tag ke andar likhne se ab photo pe click karo toh uske actual location pe chale jaoge and target = '_blank' karne se vo alag tab me open hoga

            return <div key={idx}>
                <Card elem={elem}/>
            </div>
        })
    }

    return(
        <div className='bg-black overflow-auto p-4 scrollbar-thin h-screen text-white'>
            {/* <button onClick={getData}
            className="bg-green-600 active:scale-95 m-4 mb-3 px-5 py-2 rounded text-white">
                Get Data
            </button> */}

            <h1 className='text-5xl text-blue-500 font-bold text-center mb-2 '>Photos</h1>


            <div className='flex flex-wrap gap-4 p-2'>
                {printUserData}
            </div>
            

            <div className='flex justify-center gap-6 items-center p-4'>

                <button 
                style={{opacity:index == 1 ? 0.5 : 1}}
                onClick={()=>{

                    if(index > 1){   //taaki 1 se neeche na jaaye
                        setIndex(index - 1)
                        setUserData([])  //taaki jab load ho rahe hai tab tak page empty sa rahe
                    }
                }}
                className='bg-amber-400 text-sm active:scale-95 cursor-pointer text-black rounded px-4 py-2'>
                    Prev
                </button>

                <h4>Page {index}</h4>

                <button onClick={()=>{

                    setIndex(index + 1)
                    setUserData([])
                }}
                className='bg-amber-400 text-sm active:scale-95 cursor-pointer text-black rounded px-4 py-2'>
                    Next
                </button>

            </div>
        </div>
    )
}
export default App