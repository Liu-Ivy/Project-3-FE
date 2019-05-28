import axios from "axios";

class Plan {
  constructor() {
    this.plan = axios.create({
      baseURL: process.env.REACT_APP_API_URL + "/plan",
      withCredentials: true
    });
  }

  getAllPlans() {
  return this.plan.get("/")
      .then(({ data }) => {
        console.log('getAllPlans',data)
        return data
      });
  }
  getPlan(id) {
    return this.plan.get(`/${id}`)
        .then(({ data }) => {
          console.log('getPlan',data)
          return data
        });
    }  
  createPlan(plan) {
    console.log('plan', plan)
    return this.plan.post('/', plan)
    .then(({data}) => data)
  }
  updatePlan(plan){
    return this.plan.put('/', plan)
    .then(({data})=>data)
  }
  deletePlan(id){
    return this.plan.delete('/'+id, plan)
    .then(({data})=>data)
  }
  
  imageUpload(file) {
    return this.plan.post('/image', file)
    .then(({data}) => data)
  }
}
const plan = new Plan();

export default plan;