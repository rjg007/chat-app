import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import MessagesChart from './MessagesChart'

const StudentList = (props) => {
    const [input, setInput] = useState('')
    let {userData, newArr} = props

    const handleSearchChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }
    if (input.length > 0) {
        newArr = newArr.filter((user) => {
        return user.toLowerCase().match(input)
        })
    }

    let userMessagesLength = []

    for(const newUser of newArr){
        let count = 0
        for(const user of userData){
            if(user.name === newUser){
                count++
            }
        }
        let arr = [newUser , count]
        userMessagesLength.push(arr)
    }

    return (
        <div className="row">
            
            <h2 style={{marginLeft : '135px'}}> List of Students ({newArr.length}) </h2>

            <div className="col-md-6" style={{textAlign : 'right', marginTop : '10px'}} >
                <input type = "text" placeHolder = "search by name" onChange = {handleSearchChange} value = {input}/><br/>
            </div>

            <div className="col-md-6">
                <ul className="list-group" style = {{listStyleType : 'none'}}>
                    {
                        newArr.map((user, i) => {
                            return (
                               <li key={i+1}  className="list-group-item"> <Link to={`/list/${i+1}`} >  {user}  </Link> </li>
                            )
                        })
                    }
                </ul>
            </div>
            
            <div className="col-md-6">
                <MessagesChart userMessagesLength={userMessagesLength} />
            </div>
        </div>
        
    )
}

export default StudentList