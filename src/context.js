import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { useEffect } from "react";

const URL = 'https://api.disneyapi.dev/characters';


const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [chars, setChars] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: res } = await axios.get(URL);
        setData(res.data)
        setChars(res.data.slice(0, 10));
      } catch (error) {
        console.error(error)
      }
    };

    fetchData();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const filtredData = data.filter((char) => char.name.includes(query));

    if (!filtredData.length) {
      setChars(null);
    } else {
      setChars(filtredData.slice(0, 10));
    }

  }

  return <AppContext.Provider
    value={{
      chars,
      query,
      setQuery,
      handleClick,
    }}
  >
    { children }
  </AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppProvider, AppContext, useGlobalContext };