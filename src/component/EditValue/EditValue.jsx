import React, { useState } from 'react'

function EditValue(props) {
    const [selected,setSelected] = useState(false)
    const [value,setValue] = useState(props.value)
    function handleEdit(event){
        setValue(event.target.value)
    }
    function handleChange(event){

    }
    if(!selected){
        return (
            <input value={value} onClick={setSelected(true)} readOnly/>
          )
    }else{
        return (
            <div>
            <input value={value} onFocusOut={()=>{setSelected(false)}}  onClick={setSelected(true)} onChange={handleEdit}/>)
            <button onClick={handleChange}>Save</button>
            <button onClick={setSelected(false)}>Discard</button>
            </div>)
    }

}

export default EditValue