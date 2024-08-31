import {createSlice} from "@reduxjs/toolkit";
interface VideoLoadingState{
    value: boolean
}
const initialState: VideoLoadingState = {
    value: true
}
const VideoLoadingSlice = createSlice({
    name: 'videoLoading',
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value
        }
    }
})

export const {toggle} = VideoLoadingSlice.actions;
export default VideoLoadingSlice.reducer