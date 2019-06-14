import React from 'react';
import plan  from '../lib/plan-service';
import '../pages/profile.css';
import auth from '../lib/auth-service';
import './my-info.css';

const style = {
  height: '180px',
  width: '200px',
}

class MyInfo extends React.Component{

  state = {
    imageUrl: this.props.userInfo.imageUrl,
    disable: true,
  }

// fileOnchange = (event) => {
//   const file = event.target.files[0];
//   const uploadData = new FormData()
//   uploadData.append('photo', file)

//   plan.imageUpload(uploadData)
//   .then((imageUrl) => {
//     console.log('imageUrl', imageUrl)
//     this.setState({
//       imageUrl,
//       disable: false,
//     })
//   })
//   .then(() => {
//     const newUser = this.props.userInfo;
//     newUser.imageUrl = this.state.imageUrl;
//     auth.updateUser(newUser)
//   })
//   .catch((error) => console.log(error))
// }
  render(){
    return (
        <div className="my-info">
          <div className="title">
             <h1 className="title is-size-1 has-text-white is-uppercase has-text-weight-bold is-family-monospace ">Welcome {this.props.userInfo.username}</h1>
          </div>
          <div className="image">
             <img src={this.state.imageUrl} alt="" style={style}/>
          </div>
          <div className="button is-warning is-outlined is-large" style={{width: '300px'}}>
             <input type="file" onChange={this.fileOnchange} ></input>
          </div>
        </div>
    )
  }
}

export default MyInfo