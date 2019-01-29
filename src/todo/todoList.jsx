import React from 'react'
import IconButon from '../template/iconButon';

export default props => {

    const renderRows = () => {
        const list = props.list || []
        //pegando o todo item a item
        return list.map(todo => (

                <tr key={todo._id}>
                    <td className={todo.done ? 'markAsCheck' : ''}>
                        {todo.description}
                    </td>
                    <td>
                        <IconButon style='success' icon='check' onClick={() => props.handleMarkAsDone(todo)} hide={todo.done} ></IconButon>
                        <IconButon style='warning' icon='undo' onClick={() => props.handleMarkAsPedding(todo)} hide={!todo.done} ></IconButon>
                        <IconButon style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} hide={!todo.done}></IconButon>
                    </td>
                </tr>

            ) 
        )
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                {renderRows()}
            </tbody>

        </table>
    )

}