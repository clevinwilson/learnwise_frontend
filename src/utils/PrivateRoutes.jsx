import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { authAdmin } from '../services/adminApi';
import { authTeacher } from '../services/teacherApi';
import { authUser } from '../services/userApi';
import { toast } from 'react-toastify';



function PrivateRoutes(props) {
  let [auth, setAuth] = useState(null);
  const navigate=useNavigate();
  useEffect(() => {
    if (props.user) {
      authUser().then((response) => {
        setAuth(response.data?.status)
      }).catch((response) => {
        toast.error(response.message,{position:'top-center'})
        setAuth(response.data?.status);
        navigate('/');
      })
    } else if (props.admin) {
      authAdmin().then((response) => {
        setAuth(response.data?.status)
      }).catch((response) => {
        toast.error(response.message, { position: 'top-center' })
        setAuth(response.data?.status)
        navigate('/');
      })

    } else if(props.teacher) {
      authTeacher().then((response) => {
        setAuth(response.data?.status)
      }).catch((response) => {
        toast.error(response.message, { position: 'top-center' })
        setAuth(response.data?.status)
        navigate('/');
      })
    }
  }, [])

 

  if (auth == null) return
  
  return (
    auth ? <Outlet /> : props.user ? < Navigate to="/login" /> : props.admin ? < Navigate to="/admin" /> : < Navigate to="/teacher" />
  )
}

export default PrivateRoutes