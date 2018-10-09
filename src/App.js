import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    textLength: 0,
    characters: []
  };

  handleTextChange = (e) => {
    const textLength = e.target.value.length;
    const charArray = e.target.value.split('');
    const characters = [];

    for(let i = 0; i < charArray.length; i++) {
      characters.push({id: i, letter: charArray[i]})
    }

    this.setState({
      textLength,
      characters
    });
    
  };

  handleRemoveChar = (id) => {
    const characters = this.state.characters.filter(p => p.id !== id);
    this.setState({
      textLength: characters.length,
      characters
    });
  };

  render() {
    const chars = this.state.characters.map(char => char.letter).join('');


    return (
      <div className="App">
        <input type="text" onChange={this.handleTextChange} value={chars} />
        <ValidationComponent textLength={this.state.textLength} />
        <hr/>
        <h3>Letter Characters:</h3>
        <h3><small>Click A Letter To Remove It!</small></h3>
        {this.state.characters && 
          this.state.characters.map(char => {
            return (
              <CharComponent 
                handleRemoveChar={this.handleRemoveChar}
                key={char.id}
                letter={char.letter}
                id={char.id}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
