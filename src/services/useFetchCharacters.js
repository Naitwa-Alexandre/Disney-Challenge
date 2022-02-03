import { useEffect, useState } from 'react';

const useFetchCharacters = (url, service) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: res } = await service.get(url);
        setData(res.data)
      } catch (error) {
        console.error(error)
      }
    };

    fetchData();
  }, [url, service]);

  return data;
};

export default useFetchCharacters;
