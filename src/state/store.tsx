import {configureStore} from "@reduxjs/toolkit";
import VideoLoadingReducer from "./VideoLoadingSlice";
export const store = configureStore({
    reducer: {
        videoLoading: VideoLoadingReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;