import React, { useRef, useState } from 'react';

const FormComponent = () => {
  const nameRef = useRef<string>("");
  const [name, setName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    nameRef.current = e.target.value;  // Updates nameRef without triggering a re-render
    console.log("render"); 
  };

  const handleSubmit = () => {
    setName(nameRef.current);  // Triggers render when submitting
  };

  return (
    <div>
      <input type="text" onChange={handleChange} defaultValue={name} />
      <button onClick={handleSubmit}>Submit</button>
      <p>Updated Name: {name}</p>
    </div>
  );
};

export default FormComponent;
