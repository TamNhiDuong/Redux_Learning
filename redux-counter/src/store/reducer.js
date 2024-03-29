import * as actionTypes from './actionTypes'; 

const initialState = { 
    counter: 0,
    results: [], 
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
                return {
                    ...state,
                    counter : state.counter + 1
                }   
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
        case actionTypes.SAVE_COUNTER:
                return { 
                    ...state,
                    results: state.results.concat({id:new Date(),value: state.counter}),
            }
        case actionTypes.DELETE_COUNTER:
            const newResult = state.results.filter(result => result.id !== action.idFromDispatch  )
                return {
                    ...state, 
                    results: newResult
            }
    }
    return state; 
    
}
export default reducer; 