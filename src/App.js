import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    address: [
      {
        FirstName: "Cathy",
        LastName: "Pierce",
        Birthday: "9/14/1996",
        Telephone: "200-910-8132"
      },
      {
        FirstName: "Alfonso",
        LastName: "Cooley",
        Birthday: "8/10/1973",
        Telephone: "200-657-9362"
      },
      {
        FirstName: "Victor",
        LastName: "Gordon",
        Birthday: "8/3/1970",
        Telephone: "200-661-9407"
      },
      {
        FirstName: "Colleen",
        LastName: "Wright",
        Birthday: "10/28/1967"
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Address Book</h1>
        </header>
      </div>
    );
  }
}

export default App;
