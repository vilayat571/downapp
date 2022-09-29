import { createSlice } from "@reduxjs/toolkit";

export const downSlice = createSlice({
    name: "downReducer",
    initialState: {
        text: [
            {
                text1: ""
            }
        ]
    },
    reducers: {
        textChange: (state, action) => {
            const { text1 } = action.payload;
            if(text1.indexOf(''))
            state.text.push(text1);


        }
    }
});
export const { textChange } = downSlice.actions;
export default downSlice.reducer

/* 
1) Typing -
2) Dustur -
3) ? - isaresi -
*/