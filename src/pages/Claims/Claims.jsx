import React from 'react'
import { useParams } from 'react-router-dom';
import Table from '../../component/Table/Table'

function Claims(props) {
  const { id } = useParams();
  const object = { "Vehicle_id": id };
  const headers=["Description","Status","Date","Vehicle_id"]
  return (
    <div>
    <h1>Claims</h1>
      <Table headers={headers} elements={props.elements} setElements={props.setElements}
         object={object}></Table>
    </div>
  )
}

export default Claims