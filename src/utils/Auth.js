export const BASE_URL = 'https://api.movier.nomoredomainsrocks.ru';
//export const BASE_URL = 'http://localhost:3003';

// Проверка на ошибки
const checkStatus = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

// Регистрация
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      /*'Accept': 'application/json',*/
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(checkStatus);
}

// Логин
export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      /*'Accept': 'application/json',*/
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
    .then(checkStatus);
}

export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: 'include',
    headers: {
      //'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'Authorization': `Bearer ${token}`
    }
  })
    .then(checkStatus);
}

// Выход из аккаунта
export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      /*'Accept': 'application/json',*/
      'Content-Type': 'application/json'
    }
  })
    .then(checkStatus);
}