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
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this._checkStatus);
  }

  // Сохранение фильма
  createSavedMovie(dataMovie) {
    return fetch(`${this.baseURL}/movies`, {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(dataMovie),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this._checkStatus);
  }

  // Удаление фильма
  deleteMovie(id) {
    return fetch(`${this.baseURL}/movies/${id}`, {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this._checkStatus);
  }

  // Получение информации о себе
  getUser() {
    return fetch(`${this.baseURL}/users/me`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this._checkStatus)
  }

  // Редактирование профиля
  updateUser(dataUser) {
    return fetch(`${this.baseURL}/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      body: JSON.stringify(dataUser),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this._checkStatus);
  }
}

export const mainApi = new MainApi({baseURL: 'http://localhost:3003'});
//export const mainApi = new MainApi('https://api.movier.nomoredomainsrocks.ru');