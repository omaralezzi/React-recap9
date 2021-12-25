import { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(1);

  //IIFE (Immediately invoked function expression)
  // useEffect(() => {
  //       (async function fetchData() {
  //         try {
  //           const response = await fetch(
  //             'https://jsonplaceholder.typicode.com/posts'
  //           );
  //           const data = await response.json();
  //           setData(data);
  //         } catch (error) {
  //           console.error(error.message);
  //         }
  //       })();
  //     }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data && data.map((post) => <p>{post.title}</p>)}
      <button onClick={() => setSearch((prevSearch) => prevSearch + 1)}>
        Search
      </button>
    </div>
  );
};

export default FetchData;
