import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from "../store/auth";

export const Logout =()=>{
   const {logout} = useAuth();

    useEffect( ()=>{
        console.log("run");
        logout();
    }, [logout]);

    return <Navigate to="/login"/>
};