import React, { useState } from 'react';
import './style.css'

const TodolistItem = ({label, onDeleted }) =>{

    const [done, setDone] = useState(false)
    const [importent, setImportent] = useState(importent)

      let classNames = 'todo-list-item'
      if (done) {
          classNames += ' done'
      }

      if(importent){
        classNames += ' importent'
      }

    return(
        <span className={classNames}>
            <span
                className='todo-list-item-label' 
                onClick={() => setDone(!done)}>  
                {label}
            </span>
            <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={() => setImportent(!importent)}
                > 
                <i className="fa fa-exclamation" />
            </button>
            <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onDeleted}> 
                <i className="fa fa-trash-o" />
            </button>
        </span>
    )
}

export default TodolistItem