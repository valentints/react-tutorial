import React, { useState } from 'react'

const AddList = ({ add }) =>{

    const [Label, setLabel] = useState(' ')


const onLabelChange = (e) =>{
    setLabel(e.target.value)
}

const onSubmit = (e) =>{
    e.preventDefault();
    add(Label)
    setLabel(' ')
}
    return(
        <form className="item-add-form d-flex"
        onSubmit={onSubmit}>
        <input type="text" 
            className="form-control"
            onChange={onLabelChange} 
            placeholder='que queres añadir'
            value={Label}/>
        <button className="btn btn-outline-secondary">
            ADD
        </button>
        </form>
    )
}

export default AddList