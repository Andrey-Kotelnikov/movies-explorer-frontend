 class MoviesApi {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.message);
  }

  getMovies() {
    return fetch(`${this.baseURL}`)
    .then(this._checkStatus);
  }
 }

 export const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');