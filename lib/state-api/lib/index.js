class DataApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
    };
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, el) => {
      acc[el.id] = el;
      return acc;
    }, {});
  }

  getState() {
    return this.data;
  }
}

export default DataApi;
