import React, { Component } from 'react'
import Personform from "./Personform";

const Person = (props) => {

    const {name, number} = props.person

    return (
        <div>
            {name} {number}
        </div>
    )
}

export default Person
