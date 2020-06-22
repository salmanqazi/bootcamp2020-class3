import React from 'react';
import './App.css';
import Products from './Products.js';

function App() {
  return (
    <div className="App">
      <h1> Bootcamp2020 Class 3</h1>
      <h2> Parent Child Relationship (Assignment # 3)</h2>
      <div className="">
        <h1 className="Heading">
          Product Name
                <span>
            Product Price
                </span>
        </h1>
        <Products productName="HP Laptop" price="PKR 1,20000" />
        <Products productName="DELL Laptop" price="PKR 1,15000" />
        <Products productName="Lenevo Laptop" price="PKR 95,000" />
        
      </div>

    </div>
  );
}

export default App;
