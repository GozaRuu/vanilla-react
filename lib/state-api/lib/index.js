class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }
  mapIntoObject(arr) {
    return arr.reduce((acc, el) => {
      acc[el.id] = el;
      return acc;
    }, {});
  }

  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }

  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }

  getState() {
    return ({
      articles: this.getArticles(),
      authors: this.getAuthors()
    });
  }
}

export default DataApi;
