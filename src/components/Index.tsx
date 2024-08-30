import { useState } from 'react'

export default function Index() {

    const [theme,setTheme]=useState("light");

    function handleTheme():void{
        setTheme(theme==="light"?"dark":"light");
    }

  return (
    <>
      <div>
        <h2
        style={{
          backgroundColor:theme==="light"?"white":"black",
          color:theme==="light"?"black":"white"
        }}>Change theme</h2>
      </div>
      <div>
        <button onClick={handleTheme}>Change</button>
      </div>
    </>
  )
}
