import { combineReducers } from "redux";
import { User } from "./User";
import Tasks from "./Tasks";
import Post from "./Post";

const rootReducer = combineReducers({
    user:User , 
    tasks:Tasks , 
    posts:Post
})
export default rootReducer;