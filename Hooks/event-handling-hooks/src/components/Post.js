import React from 'react';

// const person = {
//   firstName: 'Christopher',
//   car: {
//     color: 'red',
//     wheels: 4
//   }
// }

// const { firstName, car: { wheels, color } } = person;

// display the thumbnail and onClick show url

const Post = ({ postData: { id, title, url, thumbnailUrl } }) => {

  // const showFullImage = (image) => {
  //   return image.url;
  // }



  return (
    <div>
      <div className="post-container">
        <h2>Title: {title}</h2>
        <h6 className="userid">Created By: {id}</h6>
        <a href={url}><img className="imgSrc" alt="pic" key={id} src={thumbnailUrl} /></a>
        {/* <img className="imgSrc" alt="pic" key={id} src={thumbnailUrl}  /> */}
      </div>
    </div>
  );
}

export default Post;