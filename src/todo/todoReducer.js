import * as Constants from './constantes'


const INITIAL_STATE = {
    description : '',
    list: []
}

export default (state = INITIAL_STATE, action) => {
   
    switch (action.type) {
        case Constants.CHANGE_DESCRIPTION:

            return {...state, description: action.data}
    
        case Constants.SEARCH_TODO:
            
            return {...state, list: action.payload}

        
        case Constants.CLEAR:

            return {...state, description: ''}

        default:
            return state
    }
}