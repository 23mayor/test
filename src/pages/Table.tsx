import { useState, useEffect } from 'react';

export default function Table () {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
   
    useEffect(() => {
      fetch(`https://swapi.dev/api/people/`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => {
          setData(actualData);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

  return (
    <>
      <div>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {data &&
              data.(({ id, name }) => (
              <td key={id}>
              <h3>{name}</h3>
              </td>
            ))}
      
            <td>Ячейка 2</td>
            <td>Ячейка 3</td>
          </tr>
          <tr>
            <td>Ячейка 4</td>
            <td>Ячейка 5</td>
            <td>Ячейка 6</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
