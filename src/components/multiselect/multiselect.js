import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

function MSelect(props) {
  let options = props.options;
  const [selected, setSelected] = useState([]);
  return (
    <React.Fragment>
      {props.heading}
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
      />
    </React.Fragment>
  );
}
export default MSelect;
