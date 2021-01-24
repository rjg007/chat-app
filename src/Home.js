import React from 'react'
import {Link} from 'react-router-dom'

const Home = (props) => {
    return (
        <div >
            <h1> Chat Section </h1>
            <p> 
                <button className="btn btn-primary" style={{marginRight : '5px'}}> <Link style={{color : 'white'}} to='/' > Home </Link> </button>
                <button className="btn btn-primary" style={{marginRight : '5px'}}> <Link style={{color : 'white'}} to='/upload' > Upload </Link> </button>  
                <button className="btn btn-primary"> <Link style={{color : 'white'}} to='/list'> Student List </Link> </button>   
            </p> 
        </div> 
    )
}

export default Home