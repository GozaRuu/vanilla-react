class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      serachTerm: '',
    };
    this.lookupAuthor = this.lookupAuthor.bind(this);
    this.getState = this.getState.bind(this);
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, el) => {
      acc[el.id] = el;
      return acc;
    }, {});
  }

  lookupAuthor(authorId) {
    return this.data.authors[authorId];
  }

  getState() {
    return this.data;
  }
}

export default StateApi;
