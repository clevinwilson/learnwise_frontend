import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { authAdmin } from '../services/adminApi';
import { authTeacher } from '../services/teacherApi';
import { authUser } from '../services/user';



function PrivateRoutes(props) {
  let [auth, setAuth] = useState(null);
  useEffect(() => {
    if (props.user) {
      authUser().then((response) => {
        setAuth(response.data.status)
      }).catch((response) => {
        setAuth(response.data.status)
      })
    } else if (props.admin) {
      authAdmin().then((response) => {
        setAuth(response.data.status)
      }).catch((response) => {
        setAuth(response.data.status)
      })

    } else if(props.teacher) {
      authTeacher().then((response) => {
        setAuth(response.data.status)
      }).catch((response) => {
        setAuth(response.data.status)
      })
    }
  }, [])

 

  if (auth == null) return
  return (
    auth ? <Outlet /> : props.user ? < Navigate to="/login" /> : props.admin ? < Navigate to="admin/login" /> : < Navigate to="teacher/login" />
  )
}

export default PrivateRoutes