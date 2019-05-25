import axios from "axios";

class Topic {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:5000/topics",
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
