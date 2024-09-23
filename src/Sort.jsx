import React, { ChangeEvent, useState } from 'react';
const items = [
  { id: 1, name: 'Apple', category: 'Fruit', price: 1.20 },
  { id: 2, name: 'Banana', category: 'Fruit', price: 0.50 },
  { id: 3, name: 'Carrot', category: 'Vegetable', price: 0.75 },
  { id: 4, name: 'Doughnut', category: 'Bakery', price: 1.50 },
  { id: 5, name: 'Eggplant', category: 'Vegetable', price: 2.00 },
];
const SortableFilterableList = () => {
 const [data,setData] = useState(items)

  const handlechange= (e)=>{
    const {value} = e.target;
    console.log(value);
  
      const filteredvalues = items?.sort((a,b)=>a.price-b.price);
       setData(filteredvalues)
    
    console.log(data)

 }

  return (
<div className="p-4">
<div className="mb-4">
<label className="mr-2">Sort by:</label>
<select 
className="border p-1 rounded"
onChange={handlechange}
>
<option value="name">Name</option>
<option value="category">Category</option>
<option value="price">Price</option>
</select>
</div>
<div className="mb-4">
<label className="mr-2">Filter by category:</label>
<select 
          className="border p-1 rounded"
         
>
<option value="">All</option>
<option value="Fruit">Fruit</option>
<option value="Vegetable">Vegetable</option>
<option value="Bakery">Bakery</option>
</select>
</div>
<ul className="list-disc pl-5">
        {data?.map(item => (
<li key={item.id} className="mb-2">
            {item.name} - {item.category} - ${item.price.toFixed(2)}
</li>
        ))}
</ul>
</div>
  );
};
export default SortableFilterableList;





// const [sorted,setSorted] = useState();
// var newsort;
//  const handleSort=(e)=>{
//      const {value} = e.target;
//      if(value === 'category'){
//          newsort = items.filter((item)=>item.category).sort();
//          console.log(newsort);  
//      }
//      else if(value === 'price'){
//           newsort = items.map((item)=>item.price).sort((a,b)=>a-b);
//          console.log(newsort); 
//          setSorted(newsort)
//      }
//      else if(value === 'name'){
//          newsort = items.filter((item)=>item.name).sort();
//          console.log(newsort);  
//      }
//      if(value === 'Fruit'){
//        console.log("in fruit",newsort);
//          const newfilter = newsort.filter((item)=>item.category === value);
//          console.log(newfilter); 
//      }
//  }
// console.log("sorted",sorted)
// var filteredItems;
// const filteredItems=items;