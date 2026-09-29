

const App = () =>{
  
  const user = {
    username: 'Pranjal',
    age: 22,
    city: 'Bhopal'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))
  
  console.log(usera)

  return(
    <div>App
      <button>Click me</button>
    </div>
  )
}

export default App