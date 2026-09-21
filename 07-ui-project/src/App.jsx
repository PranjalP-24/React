import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661585613424-84bbf3227b08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8', 
      intro: '', 
      color: 'violet',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro: '', 
      color: 'blue',
      tag: 'UnderServed'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1701099216834-d24559a71fd2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro: '', 
      color: 'magenta',
      tag: 'UnderBanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1635766854982-fc151c6e9278?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D', 
      intro: '', 
      color: 'lightseagreen',
      tag: 'UnderPayed'
    },
    {
      img: 'https://images.unsplash.com/photo-1752170080627-0324ede1ddf2?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro: '',
      color: 'purple', 
      tag: 'Average'
    }

  ]
  return(
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App