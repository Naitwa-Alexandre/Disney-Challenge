import React from "react";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import PaginationOutlined from "../components/PaginationOutlined";

const Home = () => {
  return (
    <>
      <SearchBar />
      <Cards />
      <PaginationOutlined />
    </>
  );
};

export default Home;
