import React from "react";
import Table from "../../component/Table/Table";

function Owner(props) {
  const headers = ["id", "firstName", "lastName", "driverLicense"];
  const url = "/vehicles/";
  const object = {};
  return (
    <div>
      <h1>Owners</h1>
      <Table elements={props.elements} setElements={props.setElements}
        headers={headers}
        addButton={"Add Vehicles"}
        url={url}
        object={object}
        service={"owner"}
      ></Table>
    </div>
  );
}

export default Owner;
