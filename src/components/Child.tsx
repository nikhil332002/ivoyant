import  React from 'react';

interface ChildProps {
    calculate: (val1:number,val2:number)=>void;
}

const Child: React.FC<ChildProps> = ({calculate}) => {

    const handleClick=()=>{
        calculate(10,10);
    }

  return (
    <>
        <button onClick={handleClick}>send</button>
    </>
  )
};

export default Child;
