import axios from 'axios';

class ProfileService {
  constructor() {
    this.plan = axios.create({
      baseURL: process.env.REACT_APP_API_URL + "/profile",
      withCredentials: true,
    })
  }

  getUserPlan() {
    return this.plan.get('/')
    .then((plans) => plans)
  }

 
}

const plan = new ProfileService();

export default plan;