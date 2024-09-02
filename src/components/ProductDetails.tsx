import React, { useEffect, useState } from "react";



interface ProductProps{
    id:number;
}



const ProductDetails:React.FC<ProductProps>=({id})=>{

    const [data,setData] = useState<any>();

    

    async function fetchAPI() {
        const res=await fetch(`https://dummyjson.com/products/${id}`).then(res=>res.json())
        

        if(res){
            setData(res)
        }
        else{
            console.log("not set");     
        }
        
    }

    useEffect(()=>{
        fetchAPI()
    },[id])

    
    console.log(data);


    return(
        <div>
            <img src={data?.thumbnail} alt="" />
            <h3>Product: {data?.title}</h3>
            <p>Price: {data?.price}</p>
        </div>
    )
}
export default ProductDetails;