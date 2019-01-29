import React, {Component} from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos'

class Todo extends Component{

    constructor(props){
        super(props)
        this.state = { description: '', list: [] }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange =this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPedding = this.handleMarkAsPedding.bind(this) 
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description = ''){
        const search = description ? `&description__regex=${description}` : ''
        Axios.get(`${URL}?sort=-creatAt${search}`)
            .then(res => {
                this.setState({...this.state, description : `${description}`, list : res.data})
                console.log(res.data)
            })
    }

    handleChange(event){
        this.setState({...this.state, description: event.target.value})
    }

    handleClick(){
        console.log('Clicou!!!')
        console.log(this)
        const description = this.state.description

        Axios.post(URL, {description})
            .then(res => this.refresh() )
            .catch(error => console.log('ERRORR'))

    }

    handleRemove(todo){
        console.log('REMOVE')
        console.log(todo)
        Axios.delete(`${URL}/${todo._id}`)
            .then(res => this.refresh(this.state.description) )
    }

    handleMarkAsDone(todo){
        Axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(res => this.refresh(this.state.description))
    }
    
    handleMarkAsPedding(todo){
        Axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(res => this.refresh(this.state.description))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleClear(){
        this.refresh()
    }


    render(){
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm 
                    description={this.state.description} 
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList list={this.state.list} handleRemove={this.handleRemove} handleMarkAsDone={this.handleMarkAsDone} handleMarkAsPedding={this.handleMarkAsPedding} />
            </div>
        )
    }

} 


export default Todo