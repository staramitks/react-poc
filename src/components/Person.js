import React from 'react'

function Person({person}) {
    return (
        <div>
           <h2>I am {person.name}, having {person.age}, I have {person.skill}</h2> 
        </div>
    )
}

export default Person
