import React from 'react'

const Post = (props) => {
  return (
    <div>
      <div className="post-container">
        <h6 className="userid">Created By: { props.userId }</h6>
        <h5 className="title">Title: { props.title }</h5>
        <p className="body">Body:{ props.body }</p>
        <h6 className="id">Id: { props.id }</h6>
      </div>
    </div>
  )
}

export default Post
