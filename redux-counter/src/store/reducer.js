const initialState = { 
    counter: 0,
    results: [], 
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
                return {
                    ...state,
                    counter : state.counter + 1
                }   
        case 'DECREMENT':
                return {
                    ...state,
                    counter : state.counter - 1
                } 
        case 'ADD': 
                return {
                     ...state,
                      counter : state.counter + action.val
                } 
        case 'SUBSTRACT':
                return {
                    ...state,
                    counter : state.counter - action.val
                } 
        case 'SAVE COUNTER':
                return { 
                    ...state,
                    results: state.results.concat({id:new Date(),value: state.counter}),
            }
        case 'DELETE COUNTER':
            const newResult = state.results.filter(result => result.id !== action.idFromDispatch  )
                return {
                    ...state, 
                    results: newResult
            }
    }
    return state; 
    
}
export default reducer; 