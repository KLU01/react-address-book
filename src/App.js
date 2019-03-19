import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import { generate } from 'randomstring';
import ListAddresses from './ListAddresses/ListAddresses.js';

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

  deleteAddressHandler = (key, e) => {
    let address = [...this.state.address];
    let deleteAddress = address.findIndex((item) => item.key===key);
    if (window.confirm('Are you sure you want to delete?')) {
      address.splice(deleteAddress, 1);
      this.setState({"address" : address});
    }
  }

  render() {
    return (
      <div className="App">
        <Container>
          <header>
            <h1>Address Book</h1>
          </header>
            <ListAddresses address={this.state.address} delete={this.deleteAddressHandler}/>
        </Container>
      </div>
    );
  }
}

export default App;
