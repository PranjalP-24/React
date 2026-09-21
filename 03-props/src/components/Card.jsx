import React from 'react'

const Card= (props) => {

    console.log(props.user, props.age);

    return(
        <div className='card'>
            <img src = {props.img}/>
            <h1>{props.user}_{props.age}</h1>
            <p>Hello my name is {props.user} Pandey and I am {props.age} years old.</p>
            <button>View Profile</button>
        </div>
    )
}

export default Card