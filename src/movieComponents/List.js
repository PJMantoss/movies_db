import React from 'react'

const listItem = (props) => <li>{props.text}</li>

const List = (props) => {

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