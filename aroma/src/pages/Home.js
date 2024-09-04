/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { json } from 'react-router-dom';

export default function Home() {
  const userString = useSelector((state) => state.auth.user);
  const user = JSON.parse(userString)

  

  console.log('user', typeof user);
  console.log('user',  user);
  return <div>{user?.userData?.name}</div>;
}
