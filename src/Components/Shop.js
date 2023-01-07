import React, { useEffect, useState } from 'react';
import Producats from './Producats/Producats';

const Shop = () => {
      const [products, setProducts] = useState([]);
      useEffect(()=>{
            fetch(`Producats.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
      },[])
      return (
            <div>
                  <div className='container mx-auto grid grid-cols-3 mt-8 gap-4 mb-10'>
                  {
                        products.map(product => <Producats 
                        product ={product}
                        ></Producats>)
                  }
                  </div>
            </div>
      );
};

export default Shop;