import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
        Birthday: "10/28/1967",
        Telephone: ""
      }
    ],
    FirstName: "",
    LastName: "",
    Birthday: "",
    Telephone: "",
    Filter: ""
  }

  deleteAddressHandler = (key, e) => {
    let address = [...this.state.address];
    let deleteAddress = address.findIndex((item) => item.key===key);
    if (window.confirm('Are you sure you want to delete?')) {
      address.splice(deleteAddress, 1);
      this.setState({"address" : address});
    }
  }

  addAddressHandler = (event) => {
    event.preventDefault();
    let newAddress = {
      key: generate(10),
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Birthday: this.state.Birthday,
      Telephone: this.state.Telephone
    };
    this.setState({address: [...this.state.address, newAddress]});
    this.setState({FirstName: ""});
    this.setState({LastName: ""});
    this.setState({Birthday: ""});
    this.setState({Telephone: ""});
  }

  render() {
    return (
      <div className="App">
        <Container>
          <header>
            <h1>Address Book</h1>
          </header>
          <input type="text" id="filter"
            value={this.state.addressFilter}
            onChange={(e) => this.setState({Filter: e.target.value})} />
          <ListAddresses
            address={this.state.address}
            delete={this.deleteAddressHandler}
            filter={this.state.Filter}/>
          <h2>Add a Contact</h2>
          <Form onSubmit={this.addAddressHandler}>
            <Form.Control type="text" placeholder="Enter First Name" required
              value={this.state.FirstName}
              onChange={(e) => this.setState({FirstName: e.target.value})}/>
            <Form.Control id="icon_prefix" type="text" placeholder="Enter Last Name" required
              value={this.state.LastName}
              onChange={(e) => this.setState({LastName: e.target.value})} />
            <Form.Control type="date"
              value={this.state.Birthday}
              onChange={(e) => this.setState({Birthday: e.target.value})} />
            <Form.Control type="tel" pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              placeholder="Enter Telephone Number in the Format: 012-345-6789"
              value={this.state.Telephone}
              onChange={(e) => this.setState({Telephone: e.target.value})} />
            <Button className="btn btn-info btn-block" variant="primary" type="submit">Add Contact</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
