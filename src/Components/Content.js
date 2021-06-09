import React from 'react'
import Part from './Part'

const Content = ({parts}) => {   
     console.log(parts)
   
     const notes = {parts}
     console.log(notes[0])
     return(
    <div>
        {notes[0]}
    </div>
   ) 
    
}

export default Content;
