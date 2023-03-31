import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        hidden: false
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        toggleCounter: state => {
            state.hidden = !state.hidden ;
        }
    }
})

export const { increment, decrement, incrementByAmount, toggleCounter } = counterSlice.actions

export default counterSlice.reducer