

export default function Generics() {


    // generic with type number
    function generic<T>(value:T):T{
        return value;
    }
    console.log(generic<number>(20));
    
    // generic with type number and string, generic function
    function multipleGeneric<T,S>(a:T,b:S):[T,S]{
        return [a,b];
    }
    console.log(multipleGeneric<number,string>(10,"hi"));
    

    // generic class, generic method
    class NamedValue<T> {
        private value: T | undefined;
      
        constructor(private name: string) {}
      
        public setValue(value: T) {
          this.value = value;
        }
      
        public getValue(): T | undefined {
          return this.value;
        }
      
        public toString(): string {
          return `${this.name}: ${this.value}`;
        }
      }
      
      let value = new NamedValue<number>('myNumber');
      value.setValue(10);
      console.log(value.toString()); 

  return (
    <div>
      
    </div>
  )
}
