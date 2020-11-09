import {configureStore } from '@reduxjs/toolkit'
const initialState={value:0}

function couterReducer(state=initialState,action){
    if(action.type==='couter/increment'){
        return {
            ...state,
            value:state.value+1
        }
    }
    return state
}
const store =configureStore({reducer:couterReducer})
console.log(store.getState());