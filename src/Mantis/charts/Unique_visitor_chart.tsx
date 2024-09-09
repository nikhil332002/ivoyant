
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Sessions: 11,
    PageViews: 31,
    amt: 10,
  },
  {
    name: 'Tue',
    Sessions: 32,
    PageViews: 40,
    amt: 20,
  },
  {
    name: 'Wed',
    Sessions: 45,
    PageViews: 28,
    amt: 30,
  },
  {
    name: 'Thu',
    Sessions: 32,
    PageViews: 51,
    amt: 40,
  },
  {
    name: 'Fri',
    Sessions: 34,
    PageViews: 42,
    amt: 50,
  },
  {
    name: 'Sat',
    Sessions: 52,
    PageViews: 109,
    amt: 60,
  },
  {
    name: 'Sun',
    Sessions: 41,
    PageViews: 100,
    amt: 70,
  },
];

const Unique_visitor_chart:React.FC=()=>{

    return (
      <ResponsiveContainer width="100%" height="90%" style={{border:'1px solid rgb(230, 235, 241)',backgroundColor:'rgb(255, 255, 255)',borderRadius:'8px'}}>
        
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="PageViews" stroke="rgb(22, 119, 255)" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Sessions" stroke="rgb(0, 62, 179)" />
        </LineChart>
      </ResponsiveContainer>
    );
}
export default Unique_visitor_chart
