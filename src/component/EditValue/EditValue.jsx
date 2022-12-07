import React, { useState } from "react";

function EditValue(props) {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState(props.value);
  function handleEdit(event) {
    setValue(event.target.value);
    setSelected(true);
  }
  function handleSave() {
    alert("Send update to database");
    props.element[props.property] = value;
    setSelected(false);
  }
  function handleDiscard() {
    setValue(props.value);
    setSelected(false);
  }
  function handleChange() {
    setSelected(true);
  }
  if (!selected) {
    return <label onClick={handleChange}>{value}</label>;
  } else {
    return (
      <div>
        <input value={value} onChange={handleEdit} />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleDiscard}>Discard</button>
      </div>
    );
  }
}

export default EditValue;
