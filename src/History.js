import Statistics from "./Components/Statistics"

const History = ({good, nu, ba, all, avg}) => {
    if (all ==0) {
        return (
        <div>
          <h1>No feedback given</h1>
        </div>
        )
      }
      return(
        <Statistics good={good} neutral={nu} bad={ba} all={all} avg={avg}/>
      )
}

export default History