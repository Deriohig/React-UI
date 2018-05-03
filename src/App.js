import React, { Component } from 'react';
import ClientsBox from './clients/clients-box.js';
import AlertsBox from './alerts/alerts-box.js';
class App extends Component {
  constructor(){
      super();
      this.state={
      };
  }
  async componentDidMount() {
    var app = this;
    function updateStateAjax(json){
      app.setState(json);
    }
    fetch('./json/data.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        updateStateAjax(myJson);
      });
  }
  render() {
    return (
      <div className="App">
        <ClientsBox data={this.state.clients}/>
        <AlertsBox data={this.state.alerts}/>
      </div>
    );
  }
}
export default App;
