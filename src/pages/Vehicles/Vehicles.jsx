import React from "react";
import { useParams } from "react-router-dom";
import Table from "../../component/Table/Table";

function Vehicles(props) {
  const { id } = useParams();
  const object = { Owner_Id: id };
  const url = "/claims/";
  const headers = ["ID", "Brand", "Vin", "Color", "Year", "Owner_Id"];
  return (
    <div>
      <h1>Vehicles</h1>
      <Table
        elements={props.elements}
        setElements={props.setElements}
        headers={headers}
        addButton={"Add Claims"}
        url={url}
        object={object}
        id={id}
        property="Owner_Id"
      ></Table>
    </div>
  );
}

export default Vehicles;
