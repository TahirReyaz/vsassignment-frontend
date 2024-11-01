import React, { useEffect, useState } from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";

const Node = ({ id, data }) => {
  const [text, setText] = useState("");
  const [sources, setSources] = useState(data.leftHandles);
  const updateNodeInternals = useUpdateNodeInternals();

  const { title, label, leftHandles, rightHandles, userInput, nodeType } = data;

  useEffect(() => {
    if (nodeType === "text" && text.includes("{{") && text.includes("}}")) {
      const unparsedVars = text
        .split("{{")
        .map((uvar) => uvar.split("}}")[0].trim())
        .filter((uvar) => uvar.length > 0);
      const parsedVars = unparsedVars.map((uvar) =>
        uvar.includes(" ") ? uvar.split(" ").join("") : uvar
      );
      let newSources = [];
      if (leftHandles) {
        newSources = [...leftHandles];
      }
      newSources = [...newSources, ...parsedVars];
      setSources(newSources);
    }
  }, [text, data, leftHandles]);

  useEffect(() => {
    updateNodeInternals(id);
  }, [id, sources]);

  return (
    <div className="border border-vsPurpleLight border-1 bg-white rounded-md p-4">
      {sources?.length > 0 &&
        sources.map((handle, index) => (
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${handle}`}
            style={{
              top: `${((index + 1) * 100) / (sources.length + 1)}%`,
            }}
            key={index}
          />
        ))}
      <h2>{title}</h2>
      <h3>{label}</h3>
      {userInput && (
        <input
          {...{
            value: text,
            onChange: (e) => setText(e.target.value),
            className:
              "bg-vsPurpleLight rounded p-1 focus:outline-vsPurpleDark",
          }}
        />
      )}
      {rightHandles?.length > 0 &&
        rightHandles.map((handle, index) => (
          <Handle
            type="source"
            position={Position.Right}
            id={`${id}-${handle}`}
            key={index}
            style={{
              top: `${((index + 1) * 100) / (rightHandles.length + 1)}%`,
            }}
          />
        ))}
    </div>
  );
};

export default Node;
