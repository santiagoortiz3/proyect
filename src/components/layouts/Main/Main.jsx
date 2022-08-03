import React, { useState, useEffect } from 'react';
import { Card } from '../../UI/Card/Card';
import { LookingCharacter } from '../../UI/LookingCharacter/LookingCharacter';

export const Main = () => {
  const URL = 'https://rickandmortyapi.com/api/character/';  
  const Character = "?name=";
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error));
  },[]);
    
   const getData = async (event) => {
    const name = event.target.value;
    const url = `${URL}${Character}${name}`;
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
  }

  return (
    <div className="main">
      <h2>What character do you want to show?</h2>
      <LookingCharacter placeHolder="Write a Character" event={getData} />
      <main>
        {characters.map((character,idx) => <Card key={character.name+idx} card={character} />)}
      </main>
    </div>
  );
};
