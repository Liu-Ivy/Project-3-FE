import axios from "axios";

class Plan {
  constructor() {
    this.plan = axios.create({
      baseURL: "http://localhost:5000/plan",
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
  deletePlan(plan){
    return this.plan.delete('/', plan)
    .then(({data})=>data)
  }
  
  imageUpload(file) {
    return this.plan.post('/image', file)
    .then(({data}) => data)
  }
}
const plan = new Plan();

export default plan;