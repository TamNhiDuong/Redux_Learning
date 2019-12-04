import * as actionTypes from './actionTypes'; 

export const save = (value) => {
    return {
        type: actionTypes.SAVE_COUNTER, 
        resultFromDispatch: value
    };
}
//Asynchronous code
export const storeResult = (value) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(save(value));
        }, 2000); 
    }
};


export const deleteCounter = (value) => {
    return {
        type: actionTypes.DELETE_COUNTER, 
        idFromDispatch: value
    }
}

