import * as actionTypes from '../actionTypes'; 

const initialState = { 
    results: [], 
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_COUNTER:
                return { 
                    ...state,
                    results: state.results.concat({id:new Date(),value: action.resultFromDispatch}),
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