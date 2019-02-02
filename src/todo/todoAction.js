import * as Constants from './constantes'

export const changeDescription = (event) => ({
    type: Constants.CHANGE_DESCRIPTION,
    data: event.target.value
})