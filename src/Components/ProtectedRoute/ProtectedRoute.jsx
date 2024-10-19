import React,{Children, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider';

function ProtectedRoute({children, msg, redirect}) {
    const navigate = useNavigate();
    const [{user}, disptch] = useContext(DataContext);


    useEffect(()=>{

        // To redirect used when to access payment without having account
        if(!user){
            navigate("/auth", {state:{msg, redirect}})
        }

    }, [user])

  return children
}

export default ProtectedRoute
