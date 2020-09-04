import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

// http://jsonplaceholder.typicode.com
// https://www.figma.com/file/mzCC1e612lrmzaCbqhlHkK/Untitled?node-id=0%3A1

const Posts = () => {
  const [photos, setPhotos] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/photos"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setPhotos(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  if (photos.length === 0) return 'Loading';

  return (
    <div>
      {photos.map((photo) => <Post postData={photo} />)}
    </div>
  );
}

// console.log(posts);
// posts.map((post) => {
//   return post.id
// })
// Map over posts and display a Post component for each element in the posts array
// pass over the data for each specific post as props to the Post component
// in the Post component, nicely lay out all the details

export default Posts
