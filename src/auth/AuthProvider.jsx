import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import auth from "../firebase/firebase.config";



export const ContextProvider = createContext(null); 


const AuthProvider = ({children}) => {

    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password);
    }


    const singInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return()=>{
            unSubscribe();
        }
    },[])

    console.log(user)


const authInfo = {
    createUser,
    singInUser,
    user,
    loading
}

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;