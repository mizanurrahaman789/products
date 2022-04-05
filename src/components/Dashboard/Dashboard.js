import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
      const data = [
            {
                  "month": "Mar",
                  "investment": 100000,
                  "sell": 241,
                  "revenue": 10401
            },
            {
                  "month": "Apr",
                  "investment": 200000,
                  "sell": 423,
                  "revenue": 24500
            },
            {
                  "month": "May",
                  "investment": 500000,
                  "sell": 726,
                  "revenue": 67010
            },
            {
                  "month": "Jun",
                  "investment": 500000,
                  "sell": 529,
                  "revenue": 40405
            },
            {
                  "month": "Jul",
                  "investment": 600000,
                  "sell": 601,
                  "revenue": 50900
            },
            {
                  "month": "Aug",
                  "investment": 700000,
                  "sell": 670,
                  "revenue": 61000
            }
      ];

      return (
            <div className='chart-item'>


                  <div >
                        <LineChart width={400} height={500} data={data}>
                              <XAxis dataKey="investment" ></XAxis>
                              <YAxis dataKey=""></YAxis>
                              <Line dataKey='sell'></Line>
                        </LineChart>
                  </div>


                  <div>
                        <PieChart width={730} height={250}>



                              <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                              <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        </PieChart>
                  </div>


            </div>
      );
};

export default Dashboard;