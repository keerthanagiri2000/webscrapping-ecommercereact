import React from 'react';
import "./App.css"; 
import {SearchProduct} from './Components/SearchProduct';


export default function App(){

  return(
    <div className="App">
       <SearchProduct details={[]}/>
    </div>
  );
}

