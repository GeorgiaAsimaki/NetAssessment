import React, { useState } from "react";

function EditValue(props) {
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState(props.value);
  function handleEdit(event) {
    setValue(event.target.value);
  }
  function handleChange(event) {
    alert("Send update to database");
    setSelected(false);
  }
  if (!selected) {
    return (
      <label
        onClick={() => {
          setSelected(true);
        }}
      >
        {value}
      </label>
    );
  } else {
    return (
      <div>
        <input
          value={value}
          onClick={() => {
            setSelected(true);
          }}
          onChange={handleEdit}
        />
        <button onClick={handleChange}>Save</button>
        <button
          onClick={() => {
            setValue(props.value);
            setSelected(false);
          }}
        >
          Discard
        </button>
      </div>
    );
  }
}

export default EditValue;
