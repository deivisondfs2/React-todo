import axios from 'axios'

import * as Constants from './constantes'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
    type: Constants.CHANGE_DESCRIPTION,
    data: event.target.value
})

export const searchTodos = () => {

    return (dispatch, getState) => {
        const description = getState().todo.description
        
        const query = description ? `&description__regex=/${description}/` : '';
    
        const request = axios.get(`${URL}?sort=-creatAt${query}`)
            .then(resp => dispatch({type: Constants.SEARCH_TODO, payload: resp.data}))

    }    

}

export const addOld = (description) => {

    const request = axios.post(URL, { description })

    return [
        {
            type: Constants.ADD_TODO,
            payload: request
        },
        searchTodos()
    ]

}

export const add = (description) => {

    return (dispatch) => {
         
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(searchTodos()))
    }
}

export const markAsDone = (todo) => {

    return (dispatch) => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => dispatch({type: Constants.MARK_AS_DONE, payload: resp.data}))
            .then(resp => dispatch(searchTodos()))
    }

}


export const markAsPedding = (todo) => {

    return (dispatch) => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => dispatch({type: Constants.MARK_AS_PEDDING, payload: resp.data}))
            .then(resp => dispatch(searchTodos()))
    }

}

export const markTask = (todo, isDone = false) => {

    return (dispatch) => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: isDone})
            .then(resp => dispatch({type: Constants.MARK_STATUS_TASK, payload: resp.data}))
            .then(resp => dispatch(searchTodos()))
    }

}

export const remove = (todo) => {

    return (dispatch) => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(searchTodos()))
    }

}

export const clear = () => {
    //Apenas redux-mult
    // return  [
    //     {
    //         type:Constants.CLEAR
    //     },
    //     searchTodos()
    // ]


    //Apenas redux-thunk
    return (dispatch) => {
        dispatch({
            type: Constants.CLEAR
        })
        dispatch(
            searchTodos()
        )
    }
}

