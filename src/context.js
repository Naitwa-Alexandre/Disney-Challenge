import { createContext, useContext, useState } from "react";
import useFetchCharacters from './services/useFetchCharacters';
import axios from 'axios';

const URL = 'https://api.disneyapi.dev/characters';


const AppContext = createContext();

const AppProvider = ({ children }) => {
  const data = useFetchCharacters(URL, axios);

  const [chars, setChars] = useState([]);

  if (data.length) console.log(data);
  
  return <AppContext.Provider
    value={{
      chars
    }}
  >
    { children }
  </AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppProvider, AppContext, useGlobalContext };