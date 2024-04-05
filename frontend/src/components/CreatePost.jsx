import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: ''
    // Add more fields as needed
  });
  
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/post/create', formData);
      console.log('Server response:', response.data);

       // Assuming the response contains the ID of the newly created post
      const postId = response.data.id;
      navigate(`/post/${postId}`);
     
    // Display a success message
    alert('Post created successfully!');
    
      // Optionally, you can redirect the user to another page after successful creation
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 style={{ fontSize: '50px', fontWeight: 'bold', color: 'gray'}}>Create Post</h2>
      <form onSubmit={handleSubmit} style={{ border: '1px solid white', padding: '20px', borderRadius: '5px', maxWidth: '400px', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <input type="text" name="description" placeholder="Description" onChange={handleChange} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <input type="text" name="image" placeholder="Image" onChange={handleChange} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <input type="text" name="userId" placeholder="UserId" onChange={handleChange} />
        </div>
        {/* Add more input fields as needed */}
        <div className="mb-3"></div>
        <button type="submit"className="btn btn-custom-gray w-100 rounded-0 bg-gray"style={{ fontSize: '30px', color: 'gray'}}>Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;