import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Table from '../../component/Table/Table'

function Vehicles(props) {
    const { id } = useParams();
    const headers=["Brand","Vin","Color","Year","Owner_Id"]
    const navigate = useNavigate()
  return (
    <div>Vehicles
        <h1>{id}</h1>
        <Table headers={headers}></Table>
    </div>
  )
}

export default Vehicles