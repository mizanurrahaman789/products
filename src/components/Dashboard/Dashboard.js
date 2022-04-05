import React from 'react';
import { Line, LineChart, Pie, PieChart } from 'recharts';

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
            <div>
                  <h1>hello</h1>

                  <LineChart width={400} height={500} data={data}>

                        <Line dataKey={'month'}></Line>
                  </LineChart>


                  <PieChart width={730} height={250}>
                        <Pie data={data} dataKey="value" nameKey="sell" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                  </PieChart>

            </div>
      );
};

export default Dashboard;