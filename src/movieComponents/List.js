import React from 'react'

function listItem = (props) => <li>{props.text}</li>

function List(props) {

    const listNodes = props.data.map((value, index) => {
        return(
            <listItem text={value} key={index}></listItem>
        )
    })
    return (
        <ul>
            {listNodes}
        </ul>
    )
}

export default List;