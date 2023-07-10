import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const featchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const response = await fetch('/api/v1/greetings');
  const data = await response.json();
  return data;
});

const greetingSlice = createSlice({
    name: 'greeting',
    initialState: {
        greeting: '',
        status: 'idle',
        error: null,
    },
    reducers: {
        setGreeting: (state, action) => {
            state.greeting = action.payload;
        }
    },
    extraReducers: {
        [featchGreeting.pending]: (state, action) => {
            state.status = 'loading';
        },
        [featchGreeting.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.greeting = action.payload;
        },
        [featchGreeting.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        }
    }
});


export default greetingSlice.reducer;