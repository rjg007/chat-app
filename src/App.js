import React,{useState, useEffect} from 'react'
import {Route} from 'react-router-dom'
import Home from './Home'
import FileUpload from './FileUpload'
import StudentList from './StudentList'
import StudentMessage from './StudentMessage'

const App = (props) => {

  const [file, setFile] = useState(null) 
  const [userData, setUserData] = useState([])
  const [isUploaded, setIsUploaded] = useState(false)

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem('students')) || []
    setUserData(result)
  }, [])

  useEffect(() => {
    localStorage.setItem('students',JSON.stringify(userData))
  }, [userData])

  const newArr = []

  for (const user of userData) {
    if(!newArr.includes(user.name)) {
      newArr.push(user.name)
    }
  }
  console.log(userData)
  console.log(newArr)

  return (
    <div className="container text-center">

      <Route path='/' component={Home} /> 
      <Route path='/upload'> 
        <FileUpload userData={userData}
          setUserData={setUserData}
          file={file}
          setFile={setFile}
          isUploaded={isUploaded}
          setIsUploaded={setIsUploaded}
        />
      </Route>
      <Route path='/list' exact={true} >
        <StudentList userData={userData} newArr={newArr} />
      </Route>

      <Route path={'/list/:id'} >
        <StudentMessage userData={userData} newArr={newArr}/>
      </Route>
    </div>
  )
}

export default App;
