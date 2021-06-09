import React from 'react'

const Part = (course) => {
   return(
    <div>
        <p>
            {course[0].name} has  {course[0].exercises} to do's
        </p>
    </div>
   ) 
    
}

export default Part;
