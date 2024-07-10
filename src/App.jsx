import React, { useState } from 'react';
import "./App.css";

function App() {

  let [val,setval] = useState(0);

  function decrement(){
    setval(--val);
  }
  function increment(){
    setval(++val);
  }
  function reset(){
    setval(0);
  }

  return (
    <div className="flex justify-center items-center  gap-4 flex-col h-[100vh] w-[100vw] bg-slate-500">

        <h1 className="font-bold text-3xl text-blue-900">Increment and Decrement</h1>

        <div className="flex gap-6 bg-white p-2 text-5xl rounded-sm">
          <button className="border-r-2 px-4" onClick={decrement}>-</button>
          <div className='text-3xl font-bold my-auto text-gray-700'>{val}</div>
          <button className="border-l-2 px-4" onClick={increment}>+</button>
        </div>

        <button className="bg-gray-600 py-1 px-3 rounded-md text-xl text-white" onClick={reset}>Reset</button>

    </div> 
  );
}

export default App;