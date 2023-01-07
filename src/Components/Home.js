import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
      return (
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://craz5162.github.io/my-best-photos/img/arfat-4.jpg")` }}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                              <h1 className="mb-5 text-4xl font-bold text-white">Welcome to our website</h1>
                              <p className="mb-5">My name is Ariful Islam Arfat, I am frontend developer now</p>
                              <Link to={"/shop"}><button className="btn btn-primary">Get Started</button></Link>
                        </div>
                  </div>
            </div>
      );
};

export default Home;