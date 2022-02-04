import React from 'react';
import { useParams } from "react-router-dom";

const CardDetails = (match) => {
  const { id } = useParams;

  console.log(match);

  return <section>
    <h1>ID DO ITEM EH { id }</h1>
  </section>;
};

export default CardDetails;
