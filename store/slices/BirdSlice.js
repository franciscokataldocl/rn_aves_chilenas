import { createSlice } from '@reduxjs/toolkit';
import { fetchBirds, fetchSingleBird } from '../actions/birds/BirdsActions';
import { removeAccents } from '../../helpers/strings/removeAccents';

const initialState = {
  loading: false,
  birds: [],
  single: [],
  filtered: [],
  error: ''
};

export const birdsSlice = createSlice({
  name: 'birds',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchBirds.pending, state => {
      state.loading = true;
    });

    builder.addCase(fetchBirds.fulfilled, (state, action) => {
      const ordered = action.payload.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
      state.loading = false;
      state.birds = ordered;
      state.error = '';
      // console.log('action', action.payload)
    });

    builder.addCase(fetchBirds.rejected, (state, action) => {
      state.loading = false;
      state.birds = [];
      state.error = action.error.message;
    });

    builder.addCase(fetchSingleBird.pending, state => {
      state.loading = true;
    });

    builder.addCase(fetchSingleBird.fulfilled, (state, action) => {
      state.loading = false;
      state.single = action.payload;
      state.error = '';
    });

    builder.addCase(fetchSingleBird.rejected, (state, action) => {
      state.loading = false;
      state.single = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    filterBirds: (state, action) => {
      const textToSearch = removeAccents(action.payload).toLowerCase();
      let filteredBirds = state.birds.filter(bird => {
        const normalizeName = removeAccents(bird.name).toLowerCase();
        return normalizeName.includes(textToSearch);
      });

      state.filtered = filteredBirds;
    },
    resetBirds: state => {
      state.filtered = state.birds;
    }
  }
});
export const { filterBirds, resetBirds } = birdsSlice.actions;

// Action creators are generated for each case reducer function
export default birdsSlice.reducer;
