import React, { Component } from 'react';
import qs from 'query-string';
export default class Callback extends Component {
  state = { data: null };
  componentDidMount() {
    console.log(qs.parse(this.props.location.search));
    const q = qs.parse(this.props.location.search);
    this.setState({
      data: q
    });
  }
  render() {
    if (!this.state.data) {
      return <h3>Just a second !!!</h3>;
    }
    if (this.state.data.error) {
      return <h2>Unauthrorized</h2>;
    } else {
      return (
        <div align="center">
          <h2>User Information</h2> <br />
          Title: {this.state.data.title} <br />
          Name: {this.state.data.firstname} <br />
          LastName: {this.state.data.lastname} <br />
          DoB: {this.state.data.dateOfBirth} <br />
          Gender: {this.state.data.gender} <br />
          Nationality: {this.state.data.nationality} <br />
          Birth Place: {this.state.data.birthPlace} <br />
          BirthName: {this.state.data.birthName}
          <br />
          <br />
          <h3>ADDRESS</h3>
          Street: {this.state.data.street}
          <br />
          House Number: {this.state.data.houseNumber}
          <br />
          City: {this.state.data.city} <br />
          Zip: {this.state.data.zip}
          <br />
          Address Type: {this.state.data.addressType}
        </div>
      );
    }
  }
}
