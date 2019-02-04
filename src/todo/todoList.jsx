import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButon from '../template/iconButon';

import { markAsDone, markAsPedding, markTask, remove } from './todoAction'

class TodoList extends Component {

    constructor(props){
        super(props)

        this.renderRows = this.renderRows.bind(this)
    }


    renderRows() {
        const list = this.props.list || []
        //pegando o todo item a item
        return list.map(todo => (

                <tr key={todo._id}>
                    <td className={todo.done ? 'markAsCheck' : ''}>
                        {todo.description}
                    </td>
                    <td>
                        <IconButon style='success' icon='check' onClick={() => this.props.markTask(todo, true)} hide={todo.done} ></IconButon>
                        <IconButon style='warning' icon='undo' onClick={() => this.props.markTask(todo)} hide={!todo.done} ></IconButon>
                        <IconButon style='danger' icon='trash-o' onClick={() => this.props.remove(todo)} hide={!todo.done}></IconButon>
                    </td>
                </tr>

            ) 
        )
    }


    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {this.renderRows()}
                </tbody>

            </table>
        )

    }

}

const maprStateToProps = (state) => ({
    list: state.todo.list
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({markAsDone, markAsPedding, markTask, remove}, dispatch)
)

export default connect(maprStateToProps, mapDispatchToProps)(TodoList)