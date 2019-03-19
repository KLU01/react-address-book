import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import ListAddresses from './ListAddresses/ListAddresses.js';
import { generate } from 'randomstring';

class App extends Component {
  state = {
    address: [
      {
        key: generate(10),
        FirstName: "Cathy",
        LastName: "Pierce",
        Birthday: "9/14/1996",
        Telephone: "200-910-8132"
      },
      {
        key: generate(10),
        FirstName: "Alfonso",
        LastName: "Cooley",
        Birthday: "8/10/1973",
        Telephone: "200-657-9362"
      },
      {
        key: generate(10),
        FirstName: "Victor",
        LastName: "Gordon",
        Birthday: "8/3/1970",
        Telephone: "200-661-9407"
      },
      {
        key: generate(10),
        FirstName: "Colleen",
        LastName: "Wright",
        Birthday: "10/28/1967"
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Container>
          <header>
            <h1>Address Book</h1>
          </header>
            <ListAddresses address={this.state.address} />
        </Container>
      </div>
    );
  }
}

export default App;
