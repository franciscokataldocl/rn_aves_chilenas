import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchBirds = createAsyncThunk('birds/getAllBirds', async ( ) => {
    try {
      const { data } = await axios.get('https://aves.ninjas.cl/api/birds')
      let birds =[];
      data.map(bird=>{
        const newBird = {
          image: bird.images.thumb,
          name: bird.name.spanish,
          link: bird._links.self
        }
        birds.push(newBird)
      })
      
      return birds;
    } catch (error) {
        return error.message
    }
  });

  export const fetchSingleBird = createAsyncThunk('birds/getSingleBird', async (APIURL) => {
    try {
      const { data } = await axios.get(APIURL);
      return data;
    } catch (error) {
        return error.message
    }
  }) 