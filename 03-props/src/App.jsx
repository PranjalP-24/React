import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user ="Srivi" age ={30} img ="https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3Vuc2V0fGVufDB8fDB8fHww"/>
      <Card user ="Pranjal" age ={22} img = "https://images.unsplash.com/photo-1781100037733-fbdfc1629114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
      <Card user ="Seema" age ={56} img = "https://images.unsplash.com/photo-1677357623576-7c8aab08da22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D"/>
      <Card user ="Rajesh" age ={58} img = "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYWNlfGVufDB8fDB8fHww"/>
    </div>
  )
}

export default App  
