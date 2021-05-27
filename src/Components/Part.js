import React from 'react'

const Part = (props) => {
    console.log(props)
   return(
    <div>
        <p>
            {props.part.name} has  {props.part.ex} to do's
        </p>
    </div>
   ) 
    
}

export default Part;
