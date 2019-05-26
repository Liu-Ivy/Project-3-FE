import React from 'react';
import plan  from '../lib/plan-service';
import './profile.css';
import auth from '../lib/auth-service';

// const style = {
//   height: '80px',
//   width: '100px',
//   margin: '10px'
// }


class MyInfo extends React.Component{

  state = {
    imageUrl: "",
    disable: true,
  }

fileOnchange = (event) => {
  const file = event.target.files[0];
  const uploadData = new FormData()
  uploadData.append('photo', file)

  plan.imageUpload(uploadData)
  .then((imageUrl) => {
    console.log('imageUrl', imageUrl)
    this.setState({
      imageUrl,
      disable: false,
    })
  })
  .then(() => {
    const newUser = this.props.userInfo;
    newUser.imageUrl = this.state.imageUrl;
    auth.updateUser(newUser)
  })
  .catch((error) => console.log(error))
}
  render(){
    console.log('this.props', this.props)
    return (
        <div className="my-info">
        <h1>Welcome {this.props.userInfo.username}</h1>
          {/* <img src={props.info} alt="" style={style}/> */}
          <input type="file" onChange={this.fileOnchange}></input>
            {/* {this.state.disable ? <input type="submit" disabled></input> : <input type="submit"></input>} */}
        </div>
    )
  }
}

export default MyInfo