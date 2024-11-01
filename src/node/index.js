import React, { useState } from "react";
import { Handle, Position } from "reactflow";

import { nodeProps } from "../constants";

const Node = ({ id, data }) => {
  const [text, setText] = useState("");

  if (!id) {
    return;
  }
  const nodeType = id.split("-")[0];
  const { title, label, userInput, rightHandles, leftHandles } =
    nodeProps[nodeType];

  return (
    <div className="border border-vsPurpleLight border-1 bg-white rounded-md p-4">
      {leftHandles?.length > 0 &&
        leftHandles.map((handle, index) => (
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${handle}`}
            style={{
              top: `${((index + 1) * 100) / (leftHandles.length + 1)}%`,
            }}
          />
        ))}
      <h2>{title}</h2>
      <h3>{label}</h3>
      {userInput && (
        <input {...{ value: text, onChange: (e) => setText(e.target.value) }} />
      )}
      {rightHandles?.length > 0 &&
        rightHandles.map((handle) => (
          <Handle
            type="source"
            position={Position.Right}
            id={`${id}-${handle}`}
          />
        ))}
    </div>
  );
};

export default Node;
