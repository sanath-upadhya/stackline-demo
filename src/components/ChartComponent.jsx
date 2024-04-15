import React, { useRef } from 'react'
import { Legend, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import './ChartComponent.css'

function ChartComponent({salesData}) {
    let timePeriod = [];
    let retailSales = [];
    // const monthArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    // for (let i=0; i<salesData.length; i++) {
    //     //const dateArray = salesData[i].weekEnding.split('-');
    //     const date = new Date(salesData[i].weekEnding);  // 2009-11-10
    //     let shortMonth = '';
    //     if (salesData[i].weekEnding === '01-01-2017') {
    //         shortMonth = "JAN";
    //     } else {
    //         shortMonth = monthArray[date.getMonth()].toUpperCase();
    //     }
    //     salesData[i].month = shortMonth;
    // }
    return(
        <LineChart className="line-chart" width = {950} height = {350} data = {salesData} >
            <Line type = "monotone" dataKey = "retailSales" stroke="#2196F3" strokeWidth = {3}/>
            <Line type = "monotone" dataKey = "wholesaleSales" stroke="#334455" strokeWidth = {3}/>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="weekEnding" interval="preserveStartEnd" allowDuplicatedCategory={false} />
            <YAxis />
            <Tooltip />
            <Legend />
        </LineChart>
    );
}

export default ChartComponent 