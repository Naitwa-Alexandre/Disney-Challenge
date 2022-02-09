import React from "react";
import { useGlobalContext } from "../context";
import Card from "./SingleCard";

const Cards = () => {
  const { chars } = useGlobalContext();

  if (!chars) {
    return (
      <div>
        <h1>Nenhum personagem encontrado...</h1>
      </div>
    );
  }

  if (!chars.length) {
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <section className="cards">
      {chars.map((char, idx) => (
        <Card {...char} key={idx} />
      ))}
    </section>
  );
};

export default Cards;
