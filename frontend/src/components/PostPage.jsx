import React, { useEffect, useState } from 'react';
import axios from 'axios';




const PostPage = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const postId ='660f643a02adbfc878c43d95'
    // Replace with your actual API endpoint
    axios.get('http://localhost:8081/api/post')
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <img src={post.image} alt={post.title} />
      <p style={{ fontSize: '50px', fontWeight: 'bold', color: 'gray'}}>Your post will display here {post.userId}</p>
      {/* <CommentSection postId={post.id} /> {/* Pass the post ID to your CommentSection */}
      {/* <LikeButton postId={post.id} /> Pass the post ID to your LikeButton */} 
    </div>
  );
};

export default PostPage