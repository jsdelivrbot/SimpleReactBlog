import { combineReducers } from 'redux';
import PostsReducer fron './posts';

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
