import {createSlice, PayloadAction} from "@reduxjs/toolkit";
export interface LanguageState{
    value: string;
    name: string;
}
const initialState: LanguageState = {
    value: 'ayah_en',
    name: 'English'

}
const LanguageSlice = createSlice({
    name: 'Language',
    initialState,
    reducers: {
        updateLanguage: (state, action: PayloadAction<{ value: string; name: string }>) => {
            state.value = action.payload.value;
            state.name = action.payload.name;
        }
    }
})

export const {updateLanguage} = LanguageSlice.actions;
export default LanguageSlice.reducer