import React from 'react';
import { useGlobalContext } from '../context';

const Cards = () => {
  const { chars } =  useGlobalContext();
  
  if (chars.length) {
    console.log(chars);
  }
  
  return <div></div>;
};

export default Cards;
