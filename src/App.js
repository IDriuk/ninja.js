import React, { Component } from 'react';
import Table from './Table';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <Table rows={this.props.rows} locale="da" rowsPerPage={5} />
      </div>
    );
  }
}

export default App;
