import React from 'react';
import './Home.scss';
import { useSelector } from 'react-redux';

function Home() {
  const user = useSelector((state) => state.user);
  return (
    <div>Home</div>
  )
}

export default Home