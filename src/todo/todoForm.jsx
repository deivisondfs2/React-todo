import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Grid from '../template/grid'
import IconButon from '../template/iconButon'
import { STATUS_CODES } from 'http';
import { changeDescription, searchTodos, add, clear } from './todoAction'

class TodoForm extends Component{

    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.searchTodos()
    }

    render(){

        return(

            <div role='form' className='todoForm'>

                <Grid cols='12 9 10'>
                    <input type="text" name="description" className='form-control' id="description" placeholder='Adicione uma tarefa...' 
                        value={this.props.description}
                        onChange={this.props.changeDescription} />
                </Grid>
                
                <Grid cols='12 3 2'>
                    <IconButon style='primary' icon='plus' onClick={() => this.props.add(this.props.description)} />
                    <IconButon style='info' icon='search' onClick={() => this.props.searchTodos()} />
                    <IconButon style='default' icon='close' onClick={this.props.clear} />
                </Grid>
            
                
            </div>

        )

    }

}


const mapStateToProps = (state) => ({
    description : state.todo.description
})

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({changeDescription, searchTodos, add, clear}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)