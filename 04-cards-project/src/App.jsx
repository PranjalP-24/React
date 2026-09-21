import React from 'react'

import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg",
    nameOfCompany: "Amazon",
    datePosted: "5 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
    nameOfCompany: "Google",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$48/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/c6/18/ed/c618edb71c600432c13ebd6ef2a0c317.jpg",
    nameOfCompany: "Microsoft",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/cf/11/eb/cf11ebcc0a874e3ad3830431f7b0ab58.jpg",
    nameOfCompany: "Apple",
    datePosted: "2 weeks ago",
    post: "Software Development Engineer in Test",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$44/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/e0/6c/06/e06c061bc3c7558aefe2fbe49e2ca4c3.jpg",
    nameOfCompany: "Meta",
    datePosted: "6 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/07/4c/6f/074c6fef89944e78446c40d050a11de6.jpg",
    nameOfCompany: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/36/a5/7a/36a57a5fad6e202f1321d69a10dc0da3.jpg",
    nameOfCompany: "Netflix",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/4c/da/0b/4cda0b662effeca9c714884a3bc47ce1.jpg",
    nameOfCompany: "Adobe",
    datePosted: "4 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$43/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/cc/95/a3/cc95a38da8015373dc523740b17f6feb.jpg",
    nameOfCompany: "Salesforce",
    datePosted: "8 days ago",
    post: "Cloud Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$46/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/06/1d/ca/061dcafd76f4d6ff18db3e18fe8ca316.jpg",
    nameOfCompany: "IBM",
    datePosted: "10 weeks ago",
    post: "AI/ML Engineer",
    tag1: "Part Time",
    tag2: "Entry Level",
    pay: "$35/hour",
    location: "Bengaluru, India"
  }
  ];


  console.log(jobOpenings);

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){
        return <div key ={idx}>
          <Card brandLogo={elem.brandLogo} company = {elem.nameOfCompany} datePosted = {elem.datePosted} post = {elem.post} tag1={elem.tag1} tag2={elem.tag2} pay= {elem.pay} location ={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App
 
