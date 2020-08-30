import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

// http://jsonplaceholder.typicode.com
// https://www.figma.com/file/mzCC1e612lrmzaCbqhlHkK/Untitled?node-id=0%3A1

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const url = "http://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    axios.get(url)
      .then((response) => setPosts(response.data));
  }, []);

  console.log(posts);

  // Map over posts and display a Post component for each element in the posts array
  // pass over the data for each specific post as props to the Post component
  // in the Post component, nicely lay out all the details



  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts
