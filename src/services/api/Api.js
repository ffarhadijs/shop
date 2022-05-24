import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const getApi = async () => {
  const response =await axios.get (`${BASE_URL}/products`);
  return response.data
};


// const getApi=()=>{
// return axios.get(`${BASE_URL}/products`).then(response=>response.data)
// }

export {getApi}