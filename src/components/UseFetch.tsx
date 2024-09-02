import  { useEffect, useState } from "react"


const UesFetch=(url:string)=>{

    const [productDetails,setProductDetails]=useState<string[]>([]);

    async function  useFetch(){
        const res=await fetch(url).then(res=>res.json())
        setProductDetails(res.products);
    }

    useEffect(()=>{
        useFetch()
    },[url])

    return{
        productDetails,
        setProductDetails
    }
}
export default UesFetch;