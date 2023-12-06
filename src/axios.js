import axios from "axios";

const instance = axios.create({
  
  baseURL: "https://us-central1-clone-a1923.cloudfunctions.net/app",
});

export default instance;