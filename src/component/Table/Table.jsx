import React from 'react';
import Stack from '@mui/material/Stack';
import Form from '../Form/Form';
import { useState, useEffect } from "react";
import EditValue from '../EditValue/EditValue';
import axios from "axios"

function Table(props) {
  const url ="http://localhost:8082/user/users"
  useEffect( () =>{
    //axios.get(url).then(response =>( setUserData(response.data)))
  }
    ,[])
  const [userData, setUserData] = useState([]);
  userData.map(info => (props.headers.map))
  const tableRows = userData.map((info) => {
    return (
      <tr key={info.ID}>
        {props.headers.map((header,index) => <td key={index}><EditValue value={info[`${header}`]}/></td>)}
      </tr>
    );
  });

  const addRows = (data) => {
    const totalUsers = userData.length;
    data.ID = totalUsers + 1;
    //axios.post(url,data)
    const updatedUserData = [...userData];
    updatedUserData.push(data);
    setUserData(updatedUserData);
  };
  
  return (
    <div>
        <Stack sx={{m:4}}>
        <Form func={addRows} headers={props.headers}  />
              </Stack>
      <Stack sx={{m:2}}>
      <table className="table table-stripped">
        <thead>
          <tr>
            {props.headers.map((header,index) => <th key={index}>{header}</th>)}
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      </Stack>

    </div>
  );
}

export default Table