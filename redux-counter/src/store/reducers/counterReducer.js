import * as actionTypes from '../actions/actionTypes'; 
import {updatedObject} from '../utility'; 

const initialState = { 
    counter: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return updatedObject(state, {counter: state.counter + 1});
               
        case actionTypes.DECREMENT:
                return {
                    ...state,
                    counter : state.counter - 1
                } 
        case actionTypes.ADD: 
                return {
                     ...state,
                      counter : state.counter + action.val
                } 
        case actionTypes.SUBSTRACT:
                return {
                    ...state,
                    counter : state.counter - action.val
                } 
    }
    return state; 
    
}
export default reducer; 