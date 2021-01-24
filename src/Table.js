import React, {useState} from 'react'

const Table = (props) => {
    let {userData, isUploaded} = props
    const [input, setInput] = useState('')
    
    
    const handleSearchChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    if (input.length>0){
        userData = userData.filter((ele)=>{
        return ele.name.toLowerCase().match(input)
        })
    }
    
    return (
        <div className="text-center">
            {
                isUploaded && (
                    <div className="text-center">
                        <h2> All Student Responses </h2>
                        <input className="mb-3" type = "text" placeHolder = "search by name" onChange = {handleSearchChange} value = {input}/><br/>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th> Time </th>
                                    <th> Name </th>
                                    <th> message </th>
                                    <th> IsPrivate </th>
                                </tr>   
                            </thead>
                            <tbody>
                                {userData.map((user, i) => {
                                return (
                                    <tr key={i}>
                                        <td> {user.time} </td>
                                        <td> {user.name} </td>
                                        <td> {user.message} </td>
                                        <td> {user.private ? 'true' : 'false'} </td>
                                    </tr>
                                )
                                })}
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    )
}

export default Table