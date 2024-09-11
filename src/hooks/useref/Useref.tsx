import React, { useRef, useState, useEffect } from 'react';

const Useref: React.FC = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef<number | null>(null); // Storing timer ID using useRef

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setCount((prevCount) => prevCount + 1); // Increment count every second
    }, 1000);

    // Cleanup the timer on component unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <p>Timer: {count}</p>
      <button
        onClick={() => {
          if (timerRef.current) {
            clearInterval(timerRef.current); // Stop the timer on button click
          }
        }}
      >
        Stop Timer
      </button>
    </div>
  );
};

export default Useref;
