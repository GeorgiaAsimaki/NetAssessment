
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Field from '../Field/Field';

function Form(props) {
    const [object,setObject] = useState({})   
    
    
    const transferValue = (event) => {
        event.preventDefault();
        console.log(object)
        props.func(object);
        setObject({})
    };
    
    return (
         <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                {props.headers.map((header,index) => 
                <Field key={`${header}${index}`} id={`${header}${index}`} label={header} object={object} setObject={setObject}/>  )
                }

                <Button sx={{m:2}} variant="outlined" onClick={transferValue}>SUBMIT</Button>
              </div>
    
            </Box>
    );
    }



export default Form





