import axios from 'axios';

class ProfileService {
  constructor() {
    this.plan = axios.create({
      baseURL: "http://localhost:5000/profile",
      withCredentials: true,
    })
  }

  getUserPlan() {
    return this.plan.get('/')
    .then(({plans}) => plans)
  }

 
}

const plan = new ProfileService();

export default plan;