import axios from "axios";

axios.defaults.baseURL = "https://6443d382466f7c2b4b5b1be7.mockapi.io";

export const fetchContacts = async () => {
  try {
    const response = await axios.get("/users");
    return response.data;
  } catch (e) {
    return console.log(e);
  }
};
