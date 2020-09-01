import React from 'react';

// const person = {
//   firstName: 'Chris',
//   car: {
//     color: 'red',
//     wheels: 4
//   }
// }

// const { firstName, car: { wheels, color } } = person;

// console.log(firstName);
// console.log(wheels);
// console.log(color);

const Post = ({ postData: { userId, title, body, id } }) => {
  return (
    <div>
      <div className="post-container">
        <h6 className="userid">Created By: { userId }</h6>
        <h5 className="title">Title:{ title }</h5>
        <p className="body">Body: { body } </p>
        <h6 className="id">Id: { id } </h6>
      </div>
    </div>
  );
}

export default Post;