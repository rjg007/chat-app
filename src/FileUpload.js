import React from 'react'
import ExportCSV from './ExportCSV'
import Table from './Table'

const FileUpload = (props) => {

    const {file, setFile, isUploaded, setIsUploaded, userData, setUserData} = props

    const handleFile = (e) => {
    const result = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.onload = function (e) {
        const fileContents = e.target.result
        setFile(fileContents)
        console.log(file)
    }

    fileReader.readAsText(result)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let data = `${file}`
        data = data.split('\n')

        const newArray = []

        for(let i = 0; i < data.length; i++){
            let obj 
            if(data[i].length !== 0){
                obj = {
                    time : `${data[i].slice(0, 8)}`,
                    name : `${data[i].slice(15, data[i].includes('  To  Aniruddha SG(privately)') ? (data[i].indexOf('  To  Aniruddha SG(privately) ')) : (data[i].lastIndexOf(':') - 1))}`,
                    message : `${data[i].slice((data[i].lastIndexOf(':') + 2))}`,
                    private : data[i].includes('privately') ? true : false
                }
                newArray.push(obj)
            }    
        }
        setUserData(newArray)
        setIsUploaded(true)
    }
    return (
        <div>
            <hr />
            <h2>  File Upload </h2>
            <form onSubmit={handleSubmit}>
                <input type="file" name='file' onChange={handleFile}  className="btn btn-success" style={{marginRight : '5px'}}/>
                <input type="submit" value="upload"  className="btn btn-primary"/>
            </form>
            <br />
            <ExportCSV csvData={userData} />
            <hr />
            <Table userData={userData} isUploaded={isUploaded} />
        </div>
    )
}

export default FileUpload