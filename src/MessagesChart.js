import React from 'react'
import Chart from "react-google-charts"

const MessagesChart = (props) => {
    const {userMessagesLength} = props
    
    const chartData = [
        ['User Name', 'Messages Count']
    ]

    for(const message of userMessagesLength){
        chartData.push([...message] )
    }

    return (
        <div className="col-md-6" style={{margin : '0px'}}>
            <Chart
                width={'700px'}
                height={'500px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={chartData}
                options={{
                    title: 'Messages Count',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default MessagesChart