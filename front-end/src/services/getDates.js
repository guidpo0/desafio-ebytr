const API_URL = 'https://desafio-nimbus-backend.herokuapp.com/';

function getAll() {
  return fetch(`${API_URL}dates`).then(
    (response) => response.json(),
  ).then(({ dates }) => dates);
}

function getById(id) {
  return fetch(`${API_URL}dates/${id}`).then(
    (response) => response.json(),
  ).then((data) => data).catch((error) => error);
}

export default { getAll, getById };
