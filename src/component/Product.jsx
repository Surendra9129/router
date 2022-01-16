import React from 'react';
import { useState } from 'react';

const Product = () => {
    const [data,setData]=useState([]);
    fetch('https://fakestoreapi.com/products')
    .then((res)=>{
        res.json();
    })
    .then((res)=>{
       setData(res);
       console.log();
    })
    return (
        <div>
            <h1>Product page:{data}</h1>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={'150px'} alt="" />
            <button>get details</button>
        </div>
    );
};

export default Product;