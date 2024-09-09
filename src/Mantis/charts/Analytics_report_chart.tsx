import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jun',
    series: 58,
  },
  {
    name: 'Jul',
    series: 115,
  },
  {
    name: 'Aug',
    series: 28,
  },
  {
    name: 'Sep',
    series: 83,
  },
  {
    name: 'Oct',
    series: 63,
  },
  {
    name: 'Nov',
    series: 75,
  },
  {
    name: 'Dec',
    series: 35,
  },
  {
    series: 55,
 },
];


const Analytics_report_chart=()=> {
    return (
      <ResponsiveContainer width="94%" height="100%" style={{marginLeft:'20px',}}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          style={{backgroundColor:'white'}}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="series" stroke="rgb(250, 173, 20)" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
export default Analytics_report_chart
