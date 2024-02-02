import { useState, useEffect } from "react";

export default function Table () {
  
  const [ people, setPeople ] = useState();
//   const [ name, setName ] = useState('');
//   const [ height, setHeight ] = useState('');
//   const [ weight, setMass ] = useState('');

  useEffect (() => {
    async function getPeople() {
        try {
          const response = await fetch('https://swapi.dev/api/people');
          const people = await response.json();
          const peopleArray = await people.results;

          setPeople(peopleArray);

        } catch(error) {
          alert(error);
        }
      }

      getPeople();

  }, [])

//   fetch('https://swapi.dev/api/people')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })

console.log(people);

  return (

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        {people && 
            people.map((arr) => {
            return (
            <tr>
                <td>{arr.name}</td>
                <td>{arr.height}</td>
                <td>{arr.mass}</td>
            </tr>
            )
        })}
      </tbody>
    </table>
  );
};
