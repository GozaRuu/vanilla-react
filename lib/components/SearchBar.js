import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };
  handleSearch = (event) => {
    // console.log(this.state.serachTerm);
    this.setState({ serachTerm: event.target.value });
  }
  render() {
    return (
      <input
        type="search"
        value={this.state.serachTerm}
        placeholder="Enter search term"
        onChange={this.handleSearch}
      />
    );
  }
}

export default SearchBar;
