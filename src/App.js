import React, { useState } from 'react';
import './App.css';

import Search from './Components/Search';
import Results from './Components/Results';
import Popup from './Components/Popup';

import axios from 'axios';

console.log(process.env.REACT_APP_API_KEY);

const App = () => {

  // Tutorial : https://www.youtube.com/watch?v=ufodJVcpmps
  // Commencer par installer : npm i axios

  // étape 1 :
  // API http://www.omdbapi.com/apikey.aspx
  const API_URL = "http://www.omdbapi.com/?apikey=" + process.env.REACT_APP_API_KEY;


  // On crée un state avec les propriétés qu'on va manipuler par la suite : 
  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {}
  });

  // rechercher les éléments taper dans recherche depuis l'api 
  // les données sont dans une array et le chemin est data[data][Search] donc on mettant data entre accolade dans le .then, on rentre dans le 2ème data
  const searchMovie = (e) => {
    if (e.key === "Enter") {
      axios(API_URL + "&s=" + state.search).then(({data}) => {
        console.log(data);
        let result = data.Search;

        // on récupère les informations de data.Search qu'on stocke dans une variable et puis on l'affecte à la propriété results de l'objet state qui est un tableau vide par défaut. 
        setState(prevState => {
          return {...prevState, results : result}
        })
      })
    }
  }

  // la fonction recherche : 
  const handleInput = (e) => {
    let search = e.target.value;
      
    // on récupère l'ancienne valeur et on l'a change avec la nouveau valeur qu'on récupère avec e.target.value
    setState(prevState => {
      return { ...prevState, search : search }
    });

    // console.log(state.search);
  }

  // Fonction pour sélectionner un film en particulier : 
  // axios(API_URL + "&i=" + id) façon spécifique à cette API
  const openPopup = (id) => {
    axios(API_URL + "&i=" + id).then(({data}) => {
      let finding = data;

      setState(prevState => {
        return {...prevState, selected: finding}
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, selected : {}}
    });
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
          (typeof state.results != "undefined") ?
          (<Results results={state.results} openPopup={openPopup}/>) :
          <div className="errorMovie">Movie not found</div>
        }
        

        {/* Condition pour déterminer si on a recherché quelque chose et si c'est le cas, on affiche les informations depuis le component Popup.js */}
        {
          (typeof state.selected.Title != "undefined" ) ? 
          <Popup selected={state.selected} closePopup={closePopup}/> : false 
        }

      </main>
    </div>
  );
  
  
}

export default App;
