import React, { useState } from 'react';
import './App.css';

import Search from './Components/Search';
import Results from './Components/Results';
import Popup from './Components/Popup';

import axios from 'axios';

const App = () => {

  // Commencer par installer : npm i axios

  // étape 1 :
  // API http://www.omdbapi.com/apikey.aspx
  const API_URL = "https://www.omdbapi.com/?apikey=" + process.env.REACT_APP_API_KEY;


  // On crée des hooks avec des propriétés et des méthodes qu'on va manipuler par la suite : 
  const [search, setSearch] = useState("");

  const [results, setResults] = useState([]);

  const [selected, setSelected ] = useState('');
  

  // rechercher les éléments taper dans recherche depuis l'api 
  // les données sont dans une array et le chemin est data[data][Search] donc on mettant data entre accolade dans le .then, on rentre dans le 2ème data
  const searchMovie = (e) => {
    if (e.key === "Enter") {
      axios(API_URL + "&s=" + search).then(({data}) => {
        // console.log(data);
        let result = data.Search;

        // on récupère les informations de data.Search qu'on stocke dans une variable et puis on l'affecte à la propriété results de l'objet state qui est un tableau vide par défaut. 
        setResults(result);
      })
    }
  }

  // la fonction recherche : 
  const handleInput = (e) => {
    let searchResult = e.target.value;
      
    // on récupère l'ancienne valeur et on l'a change avec la nouveau valeur qu'on récupère avec e.target.value
    setSearch(searchResult);

   // console.log(search);
  }

  // Fonction pour sélectionner un film en particulier : 
  // axios(API_URL + "&i=" + id) façon spécifique à cette API
  const openPopup = (id) => {
    axios(API_URL + "&i=" + id).then(({data}) => {
      let finding = data;

      setSelected(finding);
    });
  }

  const closePopup = () => {

    setSelected({});
  }

  return (
    <div className="App">
      <header>
        <h1>React Project : Movie Database App</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={searchMovie}/>


        {/* Condition ternaire pour voir si l'utilisateur a bien tapé le nom d'un film existant : */}
        {
          (typeof results != "undefined") ?
          (<Results results={results} openPopup={openPopup}/>) :
          <div className="errorMovie">Movie not found</div>
        }
        

        {/* Condition pour déterminer si on a recherché quelque chose et si c'est le cas, on affiche les informations depuis le component Popup.js */}
        {
          (typeof selected.Title != "undefined" ) ? 
          <Popup selected={selected} closePopup={closePopup}/> : false 
        }

      </main>
    </div>
  );
  
  
}

export default App;
