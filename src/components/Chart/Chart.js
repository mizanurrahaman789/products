import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';


const Chart = () => {
      const [chart, setChart] = useState([]);
      useEffect(() => {
            fetch('chart.json')
                  .then(res => res.json())
                  .then(data => setChart(data))
      }, [])
      return (
            <div>
                  {
                        chart.map(chart => <Dashboard
                              key={Chart.id}
                              Chart={chart}
                        ></Dashboard>)





                  }
            </div>
      );
};

export default Chart;