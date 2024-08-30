
class myName{
    private name:string;

    public constructor(name:string){
        this.name=name;
    }

    public getName():string{
        return this.name;
    }
}
const Name=new myName("Nikhil")
console.log(Name.getName());


// class with implements and extends
interface values{
    getArea:()=>number;  
}
class Rectangle implements values{
    public constructor(protected a:number,protected b:number){}
    public getArea():number{
        return this.a * this.b;
    }
}
class RectangleOther extends Rectangle{
    public getSentence():void{
        console.log(`The length is ${this.a} and breadth is ${this.b}`);
    }
}
const rect=new RectangleOther(10,10);
rect.getArea();
rect.getSentence();

export default function Classes(){
    return(
        <div></div>
    )
}
