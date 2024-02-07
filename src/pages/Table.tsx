import { useState, useEffect } from "react";
import '../App.css';

export default function Table () {
  
  const [ people, setPeople ] = useState<any[]>();
  const [ sortedField, setSortedField ] = useState();

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

  let sortedPeople = people;

  if (sortedField && sortedField) {
    sortedPeople && sortedPeople.sort(function (a, b) {
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      return 0;
    });
  }

  return (

    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>
              <button type="button" onClick={() => setSortedField('name')}>
                Name
              </button>
            </th>
            <th>
              <button type="button" onClick={() => setSortedField('height')}>
                Height
              </button>
            </th>
            <th>
              <button type="button" onClick={() => setSortedField('mass')}>
                Weight
              </button>
            </th>
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
