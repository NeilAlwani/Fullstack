import React from 'react'

const Total = (props) =>{
   return(
    <div>
        <p>
            The total amount of to do's is {props.parts[0].ex + props.parts[1].ex + props.parts[2].ex}
        </p>
    </div>
   ) 
    
}

export default Total;
