export default class ImgApiService {
  constructor() {
    this.searchQuerry = '';
    this.page = 1;
  }

  fetchImages() {
    const URL = 'https://pixabay.com/api/';
    const API_KEY = '23634410-bd912d8d36772bd1c0bd0325c';
    return fetch(
      `${URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
    )
      .then(r => r.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
