import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function VehicleTable(props) {
const [brand, setBrand] = useState('');
const [vin, setVin] = useState('');
const [color, setColor] = useState('');
const [year, setYear] = useState('');

const [ownerName,setOwnerName]=useState('');



const changeBrand = (event) => {
	setBrand(event.target.value);
};

const changeVin = (event) => {
	setVin(event.target.value);
};

const changeColor = (event) => {
	setColor(event.target.value);
};

const changeYear = (event) => {
	setYear(event.target.value);
};

const transferValue = (event) => {
	event.preventDefault();
	const val = {
	brand,
	vin,
	color,
	year
	};
	props.func(val);
	clearState();
};

const clearState = () => {
    setBrand('');
	setVin('');
	setColor('');
	setYear('');

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
              label="Brand"
              value={brand}

              onChange = {changeBrand}
            />
            <TextField
              required
              id="outlined-required"
              label="Vin"
              value={vin}

              onChange = {changeVin}
            />

            <TextField
              required
              id="outlined-required"
              label="Color"
              value = {color}

              onChange = {changeColor}
            />
            <TextField
              required
              id="outlined-required"
              label="Year"
              value = {year}

              onChange = {changeYear}
            />


            <Button sx={{m:2}} variant="outlined" onClick={transferValue}>SUBMIT</Button>

          </div>

        </Box>
);
}

export default VehicleTable;
