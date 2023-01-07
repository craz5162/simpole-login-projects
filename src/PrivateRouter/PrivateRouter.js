import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

const PrivateRouter = ({ children }) => {
      const {user, loding} = useContext(AuthContext);
      if(loding){
            return <button className="btn loading mt-7">Please wait</button>
      }
      if(user && user.uid){
            return children;
      }
      return (
            <Navigate to={"/login"}>

            </Navigate>
      );
};

export default PrivateRouter;