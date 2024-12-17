import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../../redux/action';
import axios from 'axios';
import { config } from '../../config/Config';
import PostUpdateForm from '../../components/postList/PostUpdateForm';

const PostUpdate = () => {
  const [postUpdate, setPostUpdate] = useState({
    userId: '',
    title: '',
    body: '',
  });

  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.posts.posts.find(post => post.id === id));

  useEffect(() => {

    if (!post) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`${config.BASE_URL}/${config.posts}/${id}`);
          setPostUpdate(response.data);
        } catch (error) {
          console.log('Error fetching post:', error);
        }
      };
      fetchPost();
    } else {
      setPostUpdate(post);
    }
  }, [id, post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostUpdate((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(id, postUpdate));
    console.log(id)
  };

  return (
    <div className='container'>
      <div>
        <PostUpdateForm
          postUpdate={postUpdate}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>

    </div>
  );
}

export default PostUpdate;
