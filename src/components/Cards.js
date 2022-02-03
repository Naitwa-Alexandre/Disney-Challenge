import React from 'react';
import { useGlobalContext } from '../context';
import Card from './Card';

const Cards = () => {
  const { chars } =  useGlobalContext();

  return <section className='cards'>
    {chars.length && chars.map((char, idx) => <Card {...char} key={ idx } />)}
  </section>;
};

export default Cards;
