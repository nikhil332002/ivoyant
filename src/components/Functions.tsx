
type arfun=(value:number)=>number;

type arrofun=(val:number)=>number;

export default function Functions() {

    // No return type
    function printHello():void{
        console.log("Function does not return anything");  
    }
    printHello();

    //returns a number
    function add(a:number,b:number):number{
        return a+b;
    }
    console.log(add(4,5))
    

    //using rest operator
    function rest(a:number,b:number,...rest: number[]):number{
        return a+b+rest.reduce((m,n)=>m+n);
    }
    console.log(rest(10,10,10,10));
    

    //arrowfunction
    const arrofun:arfun=(value)=>value+100;
    console.log(arrofun(100));


    //with return type
    const operation=(a:number,b:number):number=>{
        return a+b;
    }
    console.log(operation(2,2));
    


    //destructure and using values in arrow function
    const Coordinates={
        x:4,
        y:4,
        z:8
    }

    const printCoordinates = ({ x, y }: { x: number; y: number }): void => {
        console.log(`X: ${x}, Y: ${y}`);
      };
    printCoordinates(Coordinates);



    const arrfun:arrofun=(val)=>{return val};
    console.log(arrfun);
    


    
  return (
    <div>
      
    </div>
  )
}
