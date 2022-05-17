import { properties } from "../config/properties";

export const getUsers = () => {
  return fetch(`${properties.api.root}/users`)
    .then((res) => res.json())
    .then((json) => Promise.resolve(json))
    .catch((err) => Promise.reject(err));
};

export const deleteUsers = (id) => {
  return fetch(`${properties.api.root}/users/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((json) => Promise.resolve(id)) // OVDEKA MI BESE JSON I PAYLOAD 0, sto kako zosto
    .catch((error) => Promise.reject(error));
};

export const editUsers = (user) => {
  return fetch(`${properties.api.root}/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((json) => Promise.resolve(json))
    .catch((error) => Promise.reject(error));
};
