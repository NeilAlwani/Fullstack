import Reacht, {useState} from 'react'
import Button from './Button'

const History = (props) => {
  if (props.allClick.length == 0) {
    return (
      <div>
        the app is used be pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClick.join(' ')}
    </div>
  )
}


 
const App = () => {
  const [clicks, setClicks] = useState({left: 0, right:0})
  const [allClick, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClick.concat('L'))
    setClicks({ left: clicks.left + 1, right: clicks.right})
  }

  const handleRightClick = () => {
    setAll(allClick.concat('R'))
    setClicks({left: clicks.left, right: clicks.right + 1})
  }

 
  return(
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text={"Left"} />
      <Button handleClick={handleRightClick} text={"Right"} />
      {clicks.right}
      <History allClick={allClick}/>
    </div>
  )
}


/**
 * This is part of 1.b of the full stack course.
 */

// const App = () => {
//   const course = {
//     name:  'Half Stack application develpment',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         ex: 10
//       },
//       { 
//         name: 'Using props to pass data',
//         ex: 7
//       },
//       {
//         name: 'State of a component',
//         ex: 14
//       } 
//     ]
//   }

  
//   return(
//   <div>
//     <Header course ={course.name}></Header>
//     <Content parts = {course.parts}></Content>
//     <Total parts={course.parts}></Total>
    
//   </div>
//   ) 
// }

export default App;