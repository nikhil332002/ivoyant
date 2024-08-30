
import  {useState} from 'react';
import Child from './Child';


const Parent: React.FC = () => {

    const [data,setData]=useState<number>();

    const calculate=(a:number,b?:number)=>{
        if(b){
            var res=a*b;
        }
        else{
            var res=a;
        }
        setData(res);
    }
  return (
    <>
        <h2>Value is: {data}</h2>
        <Child calculate={calculate}/>
    </>
  )
};

export default Parent;


