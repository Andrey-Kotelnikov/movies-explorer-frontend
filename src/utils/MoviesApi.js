 class MoviesApi {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
  }

  getMovies() {
    return fetch(`${this.baseURL}`)
    .then(this._checkStatus);
  }
 }

 export const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');