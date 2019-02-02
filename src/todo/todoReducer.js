import * as Constants from './constantes'


const INITIAL_STATE = {
    description : 'Ler',
    list: [
        {
        _id: 1,
        description: 'primeira',
        done: true
        },
        {
            _id: 2,
            description: 'segunda',
            done: false
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
   
    switch (action.type) {
        case Constants.CHANGE_DESCRIPTION:
            
        return {...state, description: action.data}
    
        default:
            return state
    }
}