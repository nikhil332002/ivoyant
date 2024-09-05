
import React, { useState } from 'react';
import { useAddProductMutation } from './ApiSlice';

const AddProductForm: React.FC = () => {
    // const [id, setId] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [addProduct, { isLoading, isError,data }] = useAddProductMutation();
    console.log(data);
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          await addProduct({  name, email }).unwrap();
          alert('Product added successfully!');
        } catch (err) {
          console.error('Failed to add product:', err);
        }
      };

    return(
        <div>
        <form onSubmit={handleSubmit}>
            {/* <label>
                ID:
                <input type="number" value={id} onChange={(e) => setId(Number(e.target.value))} required />
            </label> */}
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <button type="submit" disabled={isLoading}>
                {isLoading? 'Loading...' : 'Add Product'}
            </button>
            {isError && <div>Error: {JSON.stringify(isError)}</div>}
        </form>
        <p>{data?.name}</p>
        <p>{data?.email}</p>
        </div>
    )
}
export default AddProductForm;