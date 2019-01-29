import React from 'react'
import Grid from '../template/grid'
import IconButon from '../template/iconButon'

export default props => (
    <div role='form' className='todoForm'>

        <Grid cols='12 9 10'>
            <input type="text" name="description" className='form-control' id="description" placeholder='Adicione uma tarefa...' 
                value={props.description}
                onChange={props.handleChange} />
        </Grid>
        
        <Grid cols='12 3 2'>
            <IconButon style='primary' icon='plus' onClick={props.handleClick} />
            <IconButon style='info' icon='search' onClick={props.handleSearch} />
            <IconButon style='default' icon='close' onClick={props.handleClear} />
        </Grid>
    
        
    </div>
)