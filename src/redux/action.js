import axios from "axios";
import {
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER,
  ADD_TASK,
  REMOVE_TASK,
  UPDATE_TASK,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
} from "./actionType";
import { config } from "../config/Config";

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const updateUsers = (userId) => ({
  type: UPDATE_USER,
  payload: userId,
});

export const removeUser = (userId) => ({
  type: REMOVE_USER,
  payload: userId,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId,
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});

export const fetchPosts = () => {
  return (dispatch) => {
    axios
      .get(`${config.BASE_URL}/${config.posts}`)
      .then((response) => {
        dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };
};

export const addPost = (newPost) => {
  return (dispatch) => {
    axios
      .post(`${config.BASE_URL}/${config.posts}`, newPost)
      .then((response) => {
        dispatch({ type: ADD_POST, payload: response.data });
      })
      .catch((error) => {
        console.error("Error adding post:", error);
      });
  };
};

export const updatePost = (id, updatedPost) => {
  return (dispatch) => {
    axios
      .put(`${config.BASE_URL}/${config.posts}/${id}`, updatedPost)
      .then((response) => {
        dispatch({ type: UPDATE_POST, payload: response.data });
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    axios
      .delete(`${config.BASE_URL}/${config.posts}/${id}`)
      .then(() => {
        dispatch({ type: DELETE_POST, payload: id });
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };
};
