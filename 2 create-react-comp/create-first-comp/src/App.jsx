import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from "./hello";
import Random from "./Random"

function App(){
  return( <>
 <div>
    <h1>
    This is the best React course.
  </h1>
  <Hello></Hello>
  <Random></Random>
  </div>
  
   </>
   );
}

export default App;