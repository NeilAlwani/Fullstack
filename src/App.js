import React, {useState} from 'react'
import Person from "./Components/Person";

const App = () => {

    const personList = [
        //dummy data to test functionality
        { name: "Arto Hellas", number: '00-00-0000000'},
        { name: 'Nico Bosco', number:'90-89-40928340'},
        { name: 'Anjani Varma', number: '56-34-2345670'},
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]

    // States
    const [persons, setPersons] = useState(personList)
    const [newName, setnewName] = useState('')
    const [newNumber, setnewNumber] = useState('')
    const [filterName, setfilterName] = useState('')
    const [filter, setfilter] = useState(false)




    //Event handlers
    const handleNameChange = (event) => {
        setnewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setnewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()

        if (persons.map(person => person.name).includes(newName)){
            setPersons(persons)
            window.alert(`${newName} is already in the phonebook`)
        }else{
            const personObject = {
                name : newName,
                number: newNumber
            }
            setPersons(persons.concat(personObject))
        }
        setnewName('')
        setnewNumber('')
    }

    const handleFilterName = (event) => {
        setfilterName(event.target.value)
        setfilter(true)
    }

    //Components
    const Comp1 = (props) => {
        return (
            <div>
                <form onSubmit={props.addPerson}>
                    <div>
                        name: <input
                        value={newName}
                        onChange={props.handleNameChange}/>
                    </div>
                    <div>
                        number: <input
                        value={newNumber}
                        onChange={props.handleNumberChange}/>
                    </div>
                    <div>
                        <button type={"submit"}>Add</button>
                    </div>
                </form>
            </div>
        )

    }

    const Comp2 = (props) => {
        const persons = props.persons
        return(
            <div>
                <ul>
                    {persons.map(person => <Person key={person.name} person={person}/>)}
                </ul>
            </div>
        )
    }

    const Comp3 = (props) => {

        const handleChange = (e) => {
            props.handleFilterName(e.target.value)
        }
        const filterName = props.filterName

        return(
            <div>
                Filter: <input
                    value={filterName}
                    onChange={handleChange}/>

            </div>
        )
    }

    //functions
    filter
        ? persons.filter(person => person.name.toLowerCase().indexOf(filterName.toLowerCase()) >=0).map(person => <p key={person.name}>{person.name} {person.number}</p> )
        : persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)


    return (
        <div>
            <h2>Phonebook</h2>
            <h3>Filter for:</h3>
            <Comp3
                filterName={filterName}
                filter={filter}
                handleFilterName={handleFilterName}/>

            <h3>Add</h3>
            <Comp1
                addPerson={addPerson}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}/>

            <h3>Numbers</h3>
            <Comp2 persons={persons}/>
            <div>

            </div>
        </div>
    )
}

/**This is practice of 2.b */
// const App = (props) => {

//     console.log(props)

//     const [notes, setnotes] = useState(props.notes)
//     const [newNote, setnewNote] = useState(
//         "a new note ..."
//     )
//     const [showAll, setshowAll] = useState(true)

//     const notesToShow = showAll
//         ? notes
//         : notes.filter(note => note.important === true )

//     const addNote = (event) => {
//         event.preventDefault()
//         const noteObject = {
//             content: newNote,
//             date: new Date().toISOString(),
//             important: Math.random() < 0.5,
//             id: notes.length + 1
//         }

//         setnotes(notes.concat(noteObject))
//         setnewNote('')
//     }

//     const handleNoteChange = (event) => {
//         console.log(event.target.value)
//         setnewNote(event.target.value)

//     }

//     return (
//     <div>

//         <h1>Notes</h1>
//         <div>
//             <button onClick={() => setshowAll(!showAll)}>
//                 show {showAll ? "important" : "all"}
//             </button>
//         </div>
//         <ul>
//         {notesToShow.map(note => 
//           <Note key={note.id} note={note} />
//         )}
//         </ul>
      
//         <form onSubmit={addNote} >
//           <input value={newNote} onChange={handleNoteChange}/>
//           <button type={"submit"}>save</button>
//         </form>

//     </div>)
//   }

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