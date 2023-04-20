import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { authAdmin } from '../services/adminApi';
import { authTeacher } from '../services/teacherApi';
import { authUser } from '../services/userApi';
import { toast } from 'react-toastify';
import { setUserDetails } from "../Redux/Features/userSlice";
import { useDispatch } from 'react-redux';



function PrivateRoutes({ role, route }) {
  const dispatch=useDispatch();
  let [auth, setAuth] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (role === "user") {
      authUser().then((response) => {
        if (response.data.status == false) {
          localStorage.removeItem('JwtToken')
          dispatch(
            setUserDetails({})
          );
          setAuth(response.data?.status)

          
        }
        setAuth(response.data?.status);
      }).catch((response) => {
        toast.error(response.message, { position: 'top-center' })
        setAuth(response.data?.status);
        navigate('/');
      })
    } else if (role === "admin") {
      authAdmin().then((response) => {
        setAuth(response.data?.status)
      }).catch((response) => {
        toast.error(response.message, { position: 'top-center' })
        setAuth(response.data?.status)
        navigate('/');
      })

    } else if (role === "teacher") {
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
    auth ? <Outlet /> : < Navigate to={route} />
  )
}

export default PrivateRoutes