import React from 'react'
import Part from './Part'

const Content = (props) => {   


  

    const {parts} = props.course.parts
   
     return(
    <div>
       <ul>
            {props.course.parts ? props.course.parts.map((part)=> 
                <Part part={part}/>): console.log("The list hasn't rendered")}
            total is { props.course.parts.reduce(function (total, parts) { 
                        //console.log(total)
                        return(total + parts.exercises)}, 0)
                }
       </ul>
    </div>
   ) 
    
}

export default Content;
