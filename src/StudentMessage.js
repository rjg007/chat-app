import React from 'react'
import {useLocation} from 'react-router-dom'

const StudentMessage = (props) => {

    const {userData, newArr} = props
    const location = useLocation()
    const pathway =  location.pathname
    console.log(location.pathname)
   
    const newId = Number(pathway.slice(6))
    console.log(newId)
    const messages = []

    const newUser = newArr[newId -1 ]

    for (const user of userData) {
        if(user.name === newUser) {
            messages.push(user.message)
        }
    }

    return (
        <div >
            <hr />
            <h2> Responses of {newArr[newId -1] } </h2>
            <hr />
            <div style={{textAlign : 'left'}}>
                <h3> {messages.length} Responses </h3>
                <ol className="list-group">
                    {
                        messages.map((message, i) => {
                            return (
                                <li key={i} style={{marginLeft : '20px'}}> {message} </li>
                            )
                        })
                    }
                </ol>
            </div>
            <hr />
        </div>
    )
}

export default StudentMessage