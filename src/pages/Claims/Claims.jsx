import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Table from '../../component/Table/Table'

function Claims(props) {
  const { id } = useParams();
  const headers=["Description","Status","Date","Vehicle_id"]
  return (
    <div>Claims
      <h1>{id}</h1>
      <Table headers={headers}></Table>
    </div>

  )
}

export default Claims