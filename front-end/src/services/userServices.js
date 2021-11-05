import axios from 'axios';

const API_URL = 'http://localhost:8080';

export async function login({ userEmail, userPassword }) {
  return axios.post(`${API_URL}/users/login`, { userEmail, userPassword }).then(
    ({ data: { token } }) => token,
  ).catch(
    ({ response: { data: { err: { message } } } }) => {
      alert(message);
    },
  );
}

export async function getById(id) {
  return fetch(`${API_URL}climates/${id}`).then(
    (response) => response.json(),
  ).then((data) => data).catch((error) => error);
}
