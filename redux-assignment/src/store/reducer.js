const initialState = {
    persons: []
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case 'ADD':
                const newPerson = {
                    id: Math.random(), // not really unique but good enough here!
                    name: action.person.name,
                    age: action.person.age
                }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case 'DELETE':
            const newPersons = state.persons.filter(person => person.id !== action.idFromDispatch)
            return {
                ...state, 
                persons: newPersons
            }
    }
    return state;
}

export default reducer; 