import React from 'react';

const Card = ({ imageUrl, name }) => {
  return <article>
    <img src={ imageUrl } alt={ name } />
    <div>
      <h3>{ name }</h3>
    </div>
  </article>;
};

export default Card;
