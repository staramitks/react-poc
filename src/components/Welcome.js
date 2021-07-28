import React from 'react'

// function Welcome(){
//     return <h1> Hello World </h1>
// }

// const Welcome = (props) => {
// return (
//     <div>
//         <h1> Hello World {props.name} aka {props.heroName}</h1>
//         {props.children}
//     </div>
// )
// }

// Option 2 
// const Welcome = ({name, heroName, children}) => {
//     return (
//         <div>
//             <h1> Hello World from Welcome Component {name} aka {heroName}</h1>
//             {children}
//         </div>
//     )
//     }


// Option 3
const Welcome = (props) => {
    const {name,heroName,children} = props
return (
    <div>
        <h1> Hello World from Welcome Component {name} aka {heroName}</h1>
        {children}
    </div>
)
}
    
export default Welcome