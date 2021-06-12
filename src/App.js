import React, {useState} from 'react'
import Course from './Components/Course'
import Note from './Components/Note';


const App = (props) => {

    console.log(props)

    const [notes, setnotes] = useState(props.notes)
    const [newNote, setnewNote] = useState(
        "a new note ..."
    )
    const [showAll, setshowAll] = useState(true)

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important === true )

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1
        }

        setnotes(notes.concat(noteObject))
        setnewNote('')
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setnewNote(event.target.value)

    }

    return (
    <div>
        <h1>Notes</h1>
        <div>
            <button onClick={() => setshowAll(!showAll)}>
                show {showAll ? "important" : "all"}
            </button>
        </div>
        <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote} >
          <input value={newNote}
          onChange={handleNoteChange}/>
          <button type={"submit"}>save</button>
      </form>

    </div>)
  }
/**
 * Part 2.a
 */
//   const courses =[
//     {
//     id: 1,
//     name: 'Half Stack application development',
//     parts: [
//       {
//           name: 'Fundamentals of React',
//           exercises: 10,
//           id: 1
//       },
//       {
//           name: 'Using props to pass data',
//           exercises: 7,
//           id: 2
//       },
//       {
//           name: 'State of a component',
//           exercises: 14,
//           id: 3
//       },
//       {
//           name: 'Redux',
//           exercises: 11,
//           id: 4
//       },
      
//     ]
//   }
// , {
//     name: 'Node.js',
//     id: 2,
//     parts: [
//       {
//         name: 'Routing',
//         exercises: 3,
//         id: 1
//       },
//       {
//         name: 'Middlewares',
//         exercises: 7,
//         id: 2
//       }
//     ]
//   }
// ]

// console.log("App is working...")

// return(
//     <div>
//         <h1>Webdev Curr.</h1>
//         {courses.map((course) => <Course course={course} />)}
//     </div>

// ) 

export default App;