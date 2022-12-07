import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from '../../component/Table/Table'

function Owner() {
  const [id,setId] = useState("Luis")
  const headers=["ID","FirstName","LastName","DriverLicense"]
  const navigate = useNavigate()
  function handleID(event){
    setId(event.target.value)
  }
  function handleAddnewVehicle(event){
    const url ="/vehicles/"+id;
    console.log(url);
    console.log(event);
    navigate(url)
  }
  return (
    <div>Owner
      <div >
        <input type="text" name="user" defaultValue="Luis" onChange={handleID}/>
        <input type="submit" value="Submit" onClick={handleAddnewVehicle}/>
      </div>
      <Table headers={headers}></Table>
    </div>
  )
}

export default Owner