import axios from 'axios';

const API_URL = 'http://localhost:8080';

export async function getTasksByUser(userId) {
  const config = {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  };
  return axios.get(`${API_URL}/tasks/user/${userId}`, config).then(
    (data) => { console.log(data); },
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
