import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading:false,
  error:false,
  success:false
};

export const getData = createAsyncThunk("getData", async (id) => {
  
  const apikey = process.env.REACT_APP_API_KEY;
  const url = process.env.REACT_APP_URL;

  
  const options = {
    params: { id: id },
    headers: { 
      "X-RapidAPI-Key": apikey,
      "X-RapidAPI-Host": "youtube-mp3-download1.p.rapidapi.com",
    },
  };
  const response = await axios.get(url, options); 
  if(response.data.code == 403){
    throw new Error("not 200 get mp3 data")
  }
   
  return response.data;
});

const mp3Slice = createSlice({
  name: "mp3",
  initialState,
  reducers: {
    clearData:(state)=>{
        state.data = [];
        state.loading=false;
        state.error=false;
        state.success=false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state,action) => {
        state.loading =true;
        state.error = false;
        
    }).addCase(getData.fulfilled,(state,action)=>{
        state.loading =false;
        state.error = false;
        state.data = [action.payload];
        state.success = true
    }).addCase(getData.rejected,(state,action)=>{
        state.success = false
        state.loading =false;
        state.error = true;

    })
  },
});


export const {clearData} =mp3Slice.actions;
export default mp3Slice.reducer;