import React, { Component } from 'react';
import DataApi from '../DataApi';
import data from '../data';
import ArticleList from './ArticleList';

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
      <ArticleList articles={this.state.articles} authors={this.state.authors}/>
    );
  }
}

export default App;
