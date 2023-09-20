import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import counterReducer from './slices/count';
import postReducer from './slices/posts';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        post: postReducer,
        middleware: [thunk],
    },
});