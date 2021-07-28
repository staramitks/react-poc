import React from 'react'
import Person from './Person'

function NameList() {
    
    const persons =[
        {
            id : 1,
            name: 'Bruce',
            age: 30 ,
            skill: 'React'
        },
        {
            id : 2,
            name: 'amit',
            age: 33 ,
            skill: 'React'
        },
        {
            id : 3,
            name: 'Singh',
            age: 35 ,
            skill: 'Angular'
        },
        {
            id : 4,
            name: 'Yanshu',
            age: 38 ,
            skill: 'React'
        }
    ]
  
    const personList = persons.map( person => <Person key={person.id} person={person}/>)

    return <div> { personList }</div>
    
}

export default NameList
