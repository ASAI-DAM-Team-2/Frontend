import { FileDrop } from "react-file-drop";
import React from "react";

function DropFile(props) {
  return (
    <React.Fragment>
      <div>
        <div style={props.styles}>
          <FileDrop
            onFrameDragEnter={(event) => console.log("onFrameDragEnter", event)}
            onFrameDragLeave={(event) => console.log("onFrameDragLeave", event)}
            onFrameDrop={(event) => console.log("onFrameDrop", event)}
            onDragOver={(event) => console.log("onDragOver", event)}
            onDragLeave={(event) => console.log("onDragLeave", event)}
            onDrop={(files, event) => console.log("onDrop!", files, event)}
          >
            <h4> Drop new image file here! (TODO)</h4>
          </FileDrop>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DropFile;
