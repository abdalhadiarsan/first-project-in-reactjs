import { ADD_POST, UPDATE_POST, DELETE_POST } from './actionType';

const initialState = {
  posts: [],
};

 function Post(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id
            ? { ...post, ...action.payload }
            : post
        ),
      };
      
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };

    default:
      return state;
  }
}
export default Post;
