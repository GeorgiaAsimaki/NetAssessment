import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

function Field(props) {
    const [value,setValue] = useState()
    function changeTextField(event){
      let newObject = {...props.object};
      newObject[props.label]=event.target.value;
      console.log(props.label)
      console.log(event.target.value)
      console.log(newObject)
      props.setObject(newObject)
    }
    if(props.label==="ID"||props.label==="Owner_Id"||props.label==="Vehicle_id"){
      return
    }else{
  return (
    <TextField required 
                  id={props.id}
                  label={props.label}
                  value={value}
                  onChange = {changeTextField}
                />
  )
    }
}

export default Field