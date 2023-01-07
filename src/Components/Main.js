import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

const Main = () => {
      const {user, LogOut} = useContext(AuthContext);
      const hendellogout = () =>{
            LogOut()
            .then(()=>{

            })
            .catch(error =>{
                  console.error(error)
            })
      }
      return (
            <div>
                  <div className="navbar bg-primary text-primary-content">
                        <Link className="btn btn-ghost normal-case text-4xl">MOTHER</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to={"/home"}>Home</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to={"/shop"}>Shop</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to={"/login"}>Login</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to={"/register"}>Register</Link>
                        {user?.email && <p>{user.email}</p>}
                        {
                              user?.email ? <button onClick={hendellogout} className="btn btn-sm mr-3">LogOut</button> :
                              <Link to={"/login"}><button className="btn btn-sm mr-3">LogIn</button></Link>
                        }
                  </div>
            </div>
      );
};

export default Main;