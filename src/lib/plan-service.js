import axios from "axios";

class Plan {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:5000/plan",
      withCredentials: true
    });
  }

  getAllPlans() {
  return this.auth.get("/")
      .then(({ data }) => {
        console.log('getAllPlans',data)
        return data
      });
  }
  getPlan(id) {
    return this.auth.get(`/${id}`)
        .then(({ data }) => {
          console.log('getPlan',data)
          return data
        });
    }  
}

const plan = new Plan();

export default plan;