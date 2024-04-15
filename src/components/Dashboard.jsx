import React, {useState, useEffect} from 'react'
import './Dashboard.css'
import Card from './Card'
import TableComponent from './TableComponent'
import ChartComponent from './ChartComponent'
import LineChart from './LineChart'
import data1 from '../stackline_frontend_assessment_data_2021.json'

function Dashboard() {
    const [data, setData] = useState(null)
    
    const fetchData = () => {
        setData(data1.data);
        // fetch('https://localhost:4000/data')
        //     .then(res => {
        //         console.log(res.json())
        //         return res.json();
        //     })
        //     .then(dataJson => {
        //         setData(dataJson)
        //     })
        //     .catch(e => console.log(e.message));
    }

    useEffect(() => {
        fetchData();
    }, []);
    const dataLine = [
        { date: '2023-01-01', value: 10 },
        { date: '2023-02-01', value: 20 },
        { date: '2023-03-01', value: 30 },
        // Add more data points as needed
      ];

  return (
    <section className="dashboard">
        <div className="row row-height">
            <div className="column-height col-3">
                {/* Create a card here with all the images*/}
                {
                    data && data.length > 0 &&
                    data.map(indData => <Card key={indData.id} cardData= {indData} />)
                }

            </div>
            <div className="column-height-2 col-9">
                <div className='row chart-element'>
                    {/* Create a chart here */}
                    {
                        data && data.length > 0 && 
                        data.map(indData => <ChartComponent key={indData.id} salesData= {indData.sales} />)
                    }
                    
                </div>
                <div className='row table-element'>
                    {
                        data && data.length &&
                        data.map(indData => <TableComponent key={indData.id} salesData= {indData.sales} />)
                    }
                    
                    {/* Create a table here */}
                </div>
            </div>
        </div>
    </section>

  )
}

export default Dashboard