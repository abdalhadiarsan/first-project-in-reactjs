import { ADD_USER, REMOVE_USER, UPDATE_USER } from "./actionType";

const initialState = {
  users: [],
};

export function User(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };

    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((_el, index) => {
          return index !== action.payload.id;
        }),
      };

      case UPDATE_USER:
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.payload.id
              ? {
                  ...user,
                  name: action.payload.name,
                  email: action.payload.email,
                  phone: action.payload.phone,
                  gender: action.payload.gender,
                  country: action.payload.country,
                  city: action.payload.city,
                }
              : user
          ),
        };
    default:
      return state;
  }
}
