import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function Field(props) {
  const [value, setValue] = useState("");
  function clearData() {
    if (Object.keys(props.object).length === 0) {
      setValue("");
    }
  }
  React.useEffect(clearData, [props.object]);
  function changeTextField(event) {
    let newObject = { ...props.object };
    newObject[props.label] = event.target.value;
    setValue(event.target.value);
    props.setObject(newObject);
  }
  if (props.label === "ID") {
    return;
  } else if (props.label === "Owner_Id") {
    return;
  } else if (props.label === "Vehicle_id") {
    return;
  } else {
    return (
      <TextField
        required
        id={props.id}
        label={props.label}
        value={value}
        onChange={changeTextField}
      />
    );
  }
}

export default Field;
