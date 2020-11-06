import React from 'react'
import ReactDOM from 'react-dom'
import TextEntry from './components/TextEntry'

ReactDOM.render(
    <div className='oh'> 
        <div className='title'>
        <h1>Lets Test Firebase Here!</h1>
        </div>
        <TextEntry/>
    </div>,
    document.getElementById('app')
)