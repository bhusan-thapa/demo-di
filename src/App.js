import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="container4" align="center">
        <h1>Vendor App</h1>
        <a href="https://simulator-api.db.com/gw/oidc/authorize?response_type=code&redirect_uri=https://db7ff74b.ngrok.io/bank/callback&client_id=b27c641d-ba68-4c7d-a24c-9a8bb9637154&state=44339ed77955f9751dc35dbc3de901ab2c629c2c">
          <img
            border="0"
            alt="W3Schools"
            src="IconFinger.png"
            width="100"
            height="100"
          />
        </a>
        <br />
        <h4>Verify with DigitalIdent</h4>
      </div>
    );
  }
}

export default App;
