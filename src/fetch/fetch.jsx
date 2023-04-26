import axios from "axios";

axios.defaults.baseURL = "https://6443d382466f7c2b4b5b1be7.mockapi.io";

export const fetchContacts = async (page) => {
  try {
    const response = await axios.get(`/users?page=${page}&limit=3`);
    // console.log(response);
    return response.data;
  } catch (e) {
    return console.log(e);
  }
};

export const fetchContactById = async (id) => {
  try {
    const response = await axios.get(`/users/${id}`);
    // console.log(response);
    return response.data;
  } catch (e) {
    return console.log(e);
  }
};
