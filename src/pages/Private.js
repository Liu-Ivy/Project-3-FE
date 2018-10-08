import React, { Component } from 'react'
import { withAuth } from '../components/AuthProvider';
class Private extends Component {
  render() {
    const { user } = this.props
    return (
      <div>
        <h1>Welcome {user.username}</h1>
      </div>
    )
  }
}

export default withAuth(Private);