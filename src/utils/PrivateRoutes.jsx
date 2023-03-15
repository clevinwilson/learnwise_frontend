import React, { useEffect, useState } from 'react';
import {Navigate,Outlet} from "react-router-dom";
import { authAdmin } from '../services/adminApi';



function PrivateRoutes(props) {
  let [auth,setAuth]=useState(null);
  useEffect(()=>{
     if(props.user){

     }else if(props.admin){
       authAdmin().then((response) => {
         setAuth(response.data.status)
       }).catch((response) => {
         setAuth(response.data.status)
       })
     }else{

     }
  }, [])

  // {props.user?
  //   axiosInstance.get('/user/auth',{},{...headers})
  //   :props.admin?
  //     axiosInstance.get('/admin/auth',{}, { ...headers })
  //   :
  //   axiosInstance.get('/teacher/auth')
  // }

  if(auth==null) return
  return (
    auth ? <Outlet /> : props.user ? < Navigate to="/login" /> : props.admin ? < Navigate to="admin/login" /> : < Navigate to="teacher/login" />
  )
}

export default PrivateRoutes