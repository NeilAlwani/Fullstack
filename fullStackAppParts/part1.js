/**
 * 1.b Anecdotes distillery 
 */

// const App = () => {
  
//   const anecdotes = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
//   ]

  
//   const [selected, setSelected] = useState(0)
//   const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

//   const pickRanddom = () => {
//      setSelected(Math.floor(Math.random() * anecdotes.length))
//   }

//   const voteAnecdote = () => {
//      const copy = [...votes]
//      copy[selected] += 1
//      setVotes(copy)
//   }

//   const maxIndex = votes.indexOf( Math.max.apply(null, votes))


//   console.log(votes)

//   return (
//     <div>
//       <h5>Anecdote of the day</h5>
//       <p> {anecdotes[selected]} Has {votes[selected]} votes</p>
//       <Button handleClick={voteAnecdote} text={"vote"} />
//       <Button handleClick={pickRanddom} text={"next anec"} /> 
//       <h5>Anecdote with the most votes</h5>
//       {anecdotes[maxIndex]}
//     </div>
//   )
// }


/**
 * 1.b Unicafe Feedback Collector
 */

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

/**
 * This is part of 1.a
 */

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
