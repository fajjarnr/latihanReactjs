import React from 'react'
import './Person.css'

const person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click}>Hallo Saya {props.name} umur saya adalah {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;