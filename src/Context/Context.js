import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.int';


const auth = getAuth(app);


export const AuthContext = createContext()

const Context = ({ children }) => {

      const [user, setUser] = useState({});
      const [loding, setLoding] = useState(true)

      const userRegister = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
      }

      const userLogin = (email, password) =>{
            return signInWithEmailAndPassword(auth, email, password);
      }

      const LogOut = () =>{
            return signOut(auth);
      }

      // const loding = ()=>{

      // }

      useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, currentUser =>{
                  setUser(currentUser);
                  setLoding(false)
            })
            return ()=>{
                  unsubscribe()
            }
      },[])


      const authInfo = { user, loding, userRegister, userLogin, LogOut }
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default Context;