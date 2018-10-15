import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    this.props.doSearch(this.state.serachTerm);
  }, 300);

  handleSearch = (event) => {
    this.setState({ serachTerm: event.target.value }, () => {
      this.doSearch();
    });
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
