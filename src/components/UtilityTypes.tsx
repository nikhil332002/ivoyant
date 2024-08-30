
// Partial will make all properties to optional
interface point{
    a:number;
    b:number;
}
let PointValue:Partial<point>={a:10}
console.log(PointValue);

// REquired will make all properties to required
interface num{
    a:number,
    b:number,
    c?:number
}
let nums:Required<num>={
    a:1,
    b:2,
    c:3
}

//Omit will removes the keys
interface vari{
    a:number,
    b:number,
    c:number,
    d:number
}
const vars:Omit<vari,"a" | "b" | "c">={
    d:10
}


//nullish
function printInteger(integer: number | null | undefined){
    console.log(`integer is: ${integer??"No integer"}`);   
}
printInteger(null);
printInteger(10);


//null assertion
function getValue(): string | undefined {
    return 'hello';
  }
              
  let value = getValue();
  console.log('value length: ' + value!.length);



  //for array it will returns element or undefined
  let array:number[]=[];
  let arraynum=array[0];
  console.log(typeof(arraynum));
  



export default function UtilityTypes() {
  return (
    <div>
      
    </div>
  )
}
