import React, { Component } from 'react';
import DataApi from '../DataApi';
import data from '../data';

const api = new DataApi(data);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }
  render() {
    return (
      <div></div>
    );
  }
}

export default App;
