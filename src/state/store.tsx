import {configureStore} from "@reduxjs/toolkit";
import VideoLoadingReducer from "./VideoLoadingSlice";
import LanguageReducer from "./LanguageSlice";
export const store = configureStore({
    reducer: {
        videoLoading: VideoLoadingReducer,
        Language: LanguageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;