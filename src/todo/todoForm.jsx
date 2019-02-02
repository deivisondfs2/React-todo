import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Grid from '../template/grid'
import IconButon from '../template/iconButon'
import { STATUS_CODES } from 'http';
import { changeDescription } from './todoAction'

const TodoForm = props => (
    <div role='form' className='todoForm'>

        <Grid cols='12 9 10'>
            <input type="text" name="description" className='form-control' id="description" placeholder='Adicione uma tarefa...' 
                value={props.description}
                onChange={props.changeDescription} />
        </Grid>
        
        <Grid cols='12 3 2'>
            <IconButon style='primary' icon='plus' onClick={props.handleClick} />
            <IconButon style='info' icon='search' onClick={props.handleSearch} />
            <IconButon style='default' icon='close' onClick={props.handleClear} />
        </Grid>
    
        
    </div>
)

const mapStateToProps = (state) => ({
    description : state.todo.description
})

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({changeDescription}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)