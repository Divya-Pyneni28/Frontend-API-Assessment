import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';
import { Post } from '../../types/Post';

interface PostsState {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  });
  
  export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost: Post) => {
    const response = await axios.post<Post>('https://jsonplaceholder.typicode.com/posts', initialPost);
    return response.data;
  });
  

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(addNewPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.posts.push(action.payload);
      })
      .addCase(addNewPost.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to add post';
      });
  },
});

export const selectAllPosts = (state: RootState) => state.posts.posts;
export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectPostsError = (state: RootState) => state.posts.error;

export default postsSlice.reducer;
