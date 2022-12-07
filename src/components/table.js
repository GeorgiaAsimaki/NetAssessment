import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function StudentForm(props) {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [license, setLicense] = useState('');



const changeFirstName = (event) => {
	setFirstName(event.target.value);
};

const changeLastName = (event) => {
	setLastName(event.target.value);
};

const changeLicense = (event) => {
	setLicense(event.target.value);
};



const transferValue = (event) => {
	event.preventDefault();
	const val = {
	firstName,
	lastName,
	license
	};
	props.func(val);
	clearState();
};

const clearState = () => {
	setFirstName('');
	setLastName('');
	setLicense('');

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
            <TextField
              required
              id="outlined-required"
              label="First Name"
              value={firstName}

              onChange = {changeFirstName}
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              value={lastName}

              onChange = {changeLastName}
            />

            <TextField
              required
              id="outlined-required"
              label="License"
              value = {license}

              onChange = {changeLicense}
            />
            <Button sx={{m:2}} variant="outlined" onClick={transferValue}>SUBMIT</Button>

          </div>

        </Box>
);
}

export default StudentForm;
