import React from 'react';
import Login from '../components/Login/Login';

function AdminLogin() {
  return (
    <Login admin={true}/>
  )
}

export default AdminLogin