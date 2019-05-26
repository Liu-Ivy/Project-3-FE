import axios from 'axios';

class ProfileService {
  constructor() {
    this.plan = axios.create({
      baseURL: "http://localhost:4000/memes",
      withCredentials: true,
    })
  }

  createPlan(plan) {
    return this.plan.post('/', plan)
    .then(({data}) => data)
  }

  getAllPlan() {
    return this.plan.get('/')
    .then(({data}) => data)
  }

  imageUpload(file) {
    return this.plan.post('/image', file)
    .then(({data}) => data)
  }
}

const plan = new ProfileService();

export default plan;