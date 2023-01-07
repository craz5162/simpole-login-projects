import React from 'react';
import { Link } from 'react-router-dom';

const Producats = ({ product }) => {
      const {name, price, img} = product
      return (
            <div className='container mx-auto grid grid-cols-3 mt-8 gap-4'>
                  <div className="card w-96 glass">
                        <figure><img className='mt-7' src={img} alt="car!" /></figure>
                        <div className="card-body">
                              <h2 className="text-3xl">name : {name}</h2>
                              <p className="text-2xl">Price : {price}</p>
                              <div className="card-actions justify-center">
                                    <Link to={`/products/${name}`}><button className="btn btn-primary">Learn now!</button></Link>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Producats;