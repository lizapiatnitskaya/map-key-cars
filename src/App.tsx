import React from 'react';
import './App.css';
import { log } from 'console';
import {Cars} from './components/Cars'

function App() {

 const TopCars =[
     {manufacturer:"BMW", model:"m5cs"},
     {manufacturer:"Mersedes", model:"e63s"},
     {manufacturer:"Audi", model:"rs6"}
 ]

   
   return(
    <div className="App">
         <Cars Cars={TopCars}/>
    </div>
   ) 
          
}

export default App;









