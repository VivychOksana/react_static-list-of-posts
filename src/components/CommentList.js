import React from 'react';
import CommentPost from './CommentPost';
import {comments} from '../comments';
import './CommentList.css';

class CommentList extends React.Component {
  render() {
    const commentPost = comments.filter(item => item['postId'] === this.props.postId);
    const commentPostForOutput = commentPost.map(item =>
      <CommentPost
        name={item['name']}
        email={item['email']}
        body={item['body']}
        key={item['id']}
      />);

    return (
      <div className="comments">
        <b>Comments:</b>
        {commentPostForOutput}
      </div>
    );
  }
}

export default CommentList;