class MainApi {
  constructor(options) {
    this.baseURL = options.baseURL;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.message);
  }

  // Зазрузка сохраненных фильмов
  getSavedMovies() {
    return fetch(`${this.baseURL}/movies`, {
      credentials: 'include',
    })
    .then(this._checkStatus);
  }

  // Сохранение фильма
  createSavedMovie(dataMovie) {
    return fetch(`${this.baseURL}/movies`, {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(dataMovie),
    })
    .then(this._checkStatus);
  }

  // Удаление фильма
  deleteMovie(id) {
    return fetch(`${this.baseURL}/movies/${id}`, {
      credentials: 'include',
      method: 'DELETE',
    })
    .then(this._checkStatus);
  }

  // Получение информации о себе
  getUser() {
    return fetch(`${this.baseURL}/users/me`, {
      credentials: 'include',
    })
    .then(this._checkStatus);
  }

  // Редактирование профиля
  updateUser(dataUser) {
    return fetch(`${this.baseURL}/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      body: JSON.stringify(dataUser),
    })
    .then(this._checkStatus);
  }
}

export const mainApi = new MainApi('http://localhost:3002');
//export const mainApi = new MainApi('https://api.movier.nomoredomainsrocks.ru');