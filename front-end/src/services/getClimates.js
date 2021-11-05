const API_URL = 'https://desafio-nimbus-backend.herokuapp.com/';

function getAll() {
  return fetch(`${API_URL}climates`).then(
    (response) => response.json(),
  ).then(({ climates }) => climates);
}

function getById(id) {
  return fetch(`${API_URL}climates/${id}`).then(
    (response) => response.json(),
  ).then((data) => data).catch((error) => error);
}

export default { getAll, getById };
