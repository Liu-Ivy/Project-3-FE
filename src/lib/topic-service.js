import axios from "axios";

class Topic {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL + "/topics",
      withCredentials: true
    });
  }

  getAll() {
  return this.auth.get("/")
      .then(({ data }) => {
        console.log(data)
        return data
      });
  }
}

const topic = new Topic();

export default topic;
