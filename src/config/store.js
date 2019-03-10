import { createStore, combineReducers } from 'redux'
import postReducer from '../features/post-details/reducer'

import data from '../data/posts.json' 

const postsReducer = (state = data.posts) => {
    return state;
}

const rootReducer = combineReducers({
    post: postReducer,
    posts: postsReducer
})


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store