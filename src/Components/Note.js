//import Reacht from 'react'

const Note = ({note}) =>{
   const {id, content, date, important} = note

    return(
        <li>{content}</li>
    )
}

export default Note