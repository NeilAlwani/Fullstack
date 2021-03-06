import React, { Component } from 'react'
import Person from './Person'

const Persons = (props) => {

    const persons = props.persons

    return (
        <div>
            {persons.map(person => <Person key={person.name} person={person}/>)}
        </div>
    )
}

export default Persons

