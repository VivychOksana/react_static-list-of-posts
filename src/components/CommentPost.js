import React from 'react';
import './CommentPost.css';

class CommentPost extends React.Component {
  render() {
    return (
      <div className='comment'>
        <em>Name: {this.props.name}</em>
        <p>Email: {this.props.email}</p>
        <p>Text: {this.props.body}</p>
      </div>
    );
  }
}

export default CommentPost;