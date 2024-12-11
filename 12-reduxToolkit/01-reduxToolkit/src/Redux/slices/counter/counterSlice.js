import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    initialState: 0, // This will set the initialState = 0.
    name: 'counter', // यह `Redux DevTools` में `Slice` की पहचान के लिए उपयोग होता है।
    reducers: { // "reducers" : यह ऐसे फ़ंक्शन (function) हैं जो 'actions' को संभालते(handel) हैं और स्थिति (state) को बदलते हैं।
        increment: (state) => state + 1, /* यह स्थिति (state) में 1 जोड़ देगा। */
        decrement: (state) => state - 1, /* यह स्थिति (state) में से 1 घटा देगा। */
    },
})

export const { decrement , increment } = counterSlice.actions; /* Yanha par humlogon ne bataya hai ki `decrement` aur `increment` hamara `action` hai aur use export kardo. */
export default counterSlice.reducer; /* Yanha par humlogon ne counterSlice ke reducer ko export kiya hai */