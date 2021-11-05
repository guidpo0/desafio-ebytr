const API_URL = 'https://desafio-nimbus-backend.herokuapp.com/';

function getAll() {
  return fetch(`${API_URL}districts`).then(
    (response) => response.json(),
  ).then(({ districts }) => districts);
}

function getById(id) {
  return fetch(`${API_URL}districts/${id}`).then(
    (response) => response.json(),
  ).then((data) => data).catch((error) => error);
}

export default { getAll, getById };
