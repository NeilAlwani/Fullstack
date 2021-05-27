import Reacht, {useState} from 'react'
import Button from './Button'
import Statistics from './Components/Statistics'


const App = () => {
  return (
    <div>
      <h1>HI</h1>
    </div>
  )
}


/**
 * 1.b Unicafe Feedback Collector
 */

// const History = ({good, nu, ba, all, avg}) =>{
//     if (all ==0) {
//       return (
//       <div>
//         <h1>No feedback given</h1>
//       </div>
//       )
//     }
//     return(
//       <Statistics good={good} neutral={nu} bad={ba} all={all} avg={avg}/>
//     )
// }

// const App = () =>{
//   const [Good, setGood] = useState(0)
//   const [Neutral, setNeutral] = useState(0)
//   const [Bad, setBad] = useState(0)
  
//   const handleGood = () => {
//     setGood(Good + 1)
//   }

//   const handleNeutral = () => {
//     setNeutral(Neutral + 1)
//   }

//   const handleBad = () => {
//     setBad(Bad + 1)
//   }

//   const all = Good + Bad + Neutral
  
//   const avgFeedback =  (Good - Bad) / all
    
  
//   return(
//     <div>
//       <h1>Give feedback</h1>
//       <Button 
//       handleClick={handleGood} text={'good'} />
//       <Button handleClick= {handleNeutral} text={'neutral'} />
//       <Button handleClick={handleBad} text={'bad'} />
//       <h1>Stats </h1>
//       <History good={Good} nu={Neutral} ba={Bad} all={all} avg={avgFeedback}/>
//     </div>
//   )
// }


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

// History component
// const History = (props) => {
//   if (props.allClick.length == 0) {
//     return(
//       <div>
//         the app is used be pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClick.join(' ')}
//     </div>
//   )
// }


 
// const App = () => {
//   const [clicks, setClicks] = useState({left: 0, right:0})
//   const [allClick, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClick.concat('L'))
//     setClicks({ left: clicks.left + 1, right: clicks.right})
//   }

//   const handleRightClick = () => {
//     setAll(allClick.concat('R'))
//     setClicks({left: clicks.left, right: clicks.right + 1})
//   }

 
//   return(
//     <div>
//       {clicks.left}
//       <Button handleClick={handleLeftClick} text={"Left"} />
//       <Button handleClick={handleRightClick} text={"Right"} />
//       {clicks.right}
//       <History allClick={allClick}/>
//     </div>
//   )
// }

export default App;