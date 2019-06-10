import React from 'react';
//code to connect the action creator to this file
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostList extends React.Component{
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Post List</div>;
  }
}

export default connect(null, {fetchPosts: fetchPosts})(PostList);