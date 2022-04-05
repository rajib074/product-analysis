import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Deshbord.css'
const Deshbord = () => {


      const data = [
        {
            month: 'Mar',
            investment: 10000,
            sell: 241,
            revenue: 10401
        },
        {
            month: "Apr",
            investment: 20000,
            sell: 423,
            revenue: 24500
        },
        {
            month: "May",
            investment: 50000,
            sell: 726,
            revenue: 67010
        },
        {
            month: "Jun",
            investment: 50000,
            sell: 529,
            revenue: 40405
        },
        {
            month: "Jul",
            investment: 60000,
            sell: 30000,
            revenue: 50900
        },
        {
            month: "Aug",
            investment: 70000,
            sell: 670,
            revenue: 61000
        }
    ]
    
    return (

        <div className="recharts">
            <BarChart className='Chart' width={350} height={200} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sell" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#000000" />
                <Bar dataKey="investment" fill="#82ca9d" />
            </BarChart>

            <LineChart className='Chart' width={350} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                <Tooltip />
                <XAxis dataKey="month"/>
                <YAxis />                
            </LineChart>

            <LineChart className='Chart' width={350} height={200} data={data}>
                <Line dataKey={'investment'} stroke="green"></Line>
                <Line dataKey={'sell'} stroke="green"></Line>
                <Line dataKey={'revenue'} stroke="green"></Line>
                <Tooltip />
                <XAxis dataKey='month'></XAxis>
                <YAxis></YAxis>
            </LineChart>
        </div>
        
    );
};

export default Deshbord;