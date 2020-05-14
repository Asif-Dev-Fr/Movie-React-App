import React, {Component} from 'react';
import './App.css';
import Artiste from './Components/Artiste';

class App extends Component {

  state = {
    artiste: '',
    chanson: '',
  }


  render() {
    return (
      <div className="App">
        <h1>Music App</h1>
        <Artiste artiste={this.state.artiste} chanson={this.state.chanson}></Artiste>
        <form>
          <input type="text" placeholder="Nom de votre chanson" />
          <button type="submit">Rechercher</button>
        </form>
      </div>
    );
  }
  
}

export default App;
