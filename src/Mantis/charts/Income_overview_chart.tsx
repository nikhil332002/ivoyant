
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mo',
    pv: 80,
  },
  {
    name: 'Tu',
    pv: 95,
  },
  {
    name: 'We',
    pv: 70,
  },
  {
    name: 'Th',
    pv: 42,
  },
  {
    name: 'Fr',
    pv: 65,
  },
  {
    name: 'Sa',
    pv: 55,
  },
  {
    name: 'Su',
    pv: 78,
  },
];


const Income_overview_chart=()=>{
    return (
      <ResponsiveContainer width="95%" height="90%" style={{border:'1px solid rgb(230, 235, 241)',marginLeft:'20px',backgroundColor:'rgb(255, 255, 255)',borderRadius:'8px'}}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: -10,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <CartesianGrid strokeDasharray="0 1" />
          <Bar dataKey="pv" fill="rgba(92, 219, 211, 0.85)"  radius={5}/>
        </BarChart>
      </ResponsiveContainer>
    );
  }

export default Income_overview_chart
