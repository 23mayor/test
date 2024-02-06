import { useState, useEffect } from "react";
import '../App.css';

export default function Table () {
  
  const [ people, setPeople ] = useState<any[]>();

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

  // let sortedPeople = people;

  // function compare(a, b) {
  //   if (a.name < b.name) {
  //     return -1;
  //   }
  //   if (a.name > b.name) {
  //     return -1;
  //   }
  //   return 0;
  // }

  return (

    <div className="tableContainer">
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
    </div>
  );
};
