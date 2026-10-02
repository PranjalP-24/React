const Navbar =(props)=>{

    console.log(props)
  return(
    <div>
        
        <button onClick={()=>{
            props.setTheme('Dark')
        }}>Change Theme</button>
    </div>
  )
}

export default Navbar