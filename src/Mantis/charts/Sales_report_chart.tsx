import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    sales: 120,
    income: 180,
    amt: 2400,
  },
  {
    name: 'Feb',
    sales: 45,
    income: 90,
    amt: 2210,
  },
  {
    name: 'Mar',
    sales: 78,
    income: 135,
    amt: 2290,
  },
  {
    name: 'Apr',
    sales: 150,
    income: 114,
    amt: 2000,
  },
  {
    name: 'May',
    sales: 168,
    income: 120,
    amt: 2181,
  },
  {
    name: 'Jun',
    sales: 99,
    income: 145,
    amt: 2500,
  },
];



const Sales_report_chart=()=>{
    return (
      <ResponsiveContainer width="100%" height="100%" style={{border:'1px solid rgb(230, 235, 241)',backgroundColor:'rgb(255, 255, 255)',borderRadius:'8px'}}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: -30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="income" fill="rgb(250, 173, 20)"  barSize={5} radius={8}/>
          <Bar dataKey="sales" fill="rgb(22, 119, 255)"  barSize={5} radius={8}/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
export default Sales_report_chart
