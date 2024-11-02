import React, { useEffect, useRef, useState } from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";
import { extractAndValidateVariables } from "../utils";

const Node = ({ id, data }) => {
  const [text, setText] = useState("");
  const [sources, setSources] = useState(data.leftHandles);
  const updateNodeInternals = useUpdateNodeInternals();

  const textareaRef = useRef(null);

  const { title, label, leftHandles, rightHandles, userInput, nodeType } = data;

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  // for adding or removing sources acc to variables added in textarea
  useEffect(() => {
    if (nodeType === "text" && text.includes("{{") && text.includes("}}")) {
      const parsedVars = extractAndValidateVariables(text);
      let newSources = [];
      if (leftHandles) {
        newSources = [...leftHandles];
      }
      newSources = [...newSources, ...parsedVars];
      setSources(newSources);
    }
  }, [text, data, leftHandles]);

  // For letting react-flow know about the change in the number of sources
  useEffect(() => {
    updateNodeInternals(id);
  }, [id, sources]);

  // For adjusting height of text area on text update
  useEffect(() => {
    if (nodeType === "text") {
      adjustTextareaHeight();
    }
  }, [text, nodeType]);

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
              padding: "4px",
              backgroundColor: "#bc7dff",
            }}
            key={index}
            className="relative"
          >
            {nodeType === "text" && (
              <span className="absolute -bottom-3 -left-10 text-xs text-vsPurpleDark">
                {handle}
              </span>
            )}
          </Handle>
        ))}
      <h2>{title}</h2>
      <h3>{label}</h3>
      {userInput && nodeType === "text" && (
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => (textareaRef.current.style.width = "100%")}
          onBlur={() => (textareaRef.current.style.width = "initial")}
          className="bg-vsPurpleLight rounded p-1 focus:outline-vsPurpleDark transition-all duration-200 ease-in-out"
          style={{
            minWidth: "100%",
            width: "auto",
            overflow: "hidden",
            resize: "none",
          }}
        />
      )}
      {userInput && nodeType !== "text" && (
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
              padding: "4px",
              backgroundColor: "#bc7dff",
            }}
          />
        ))}
    </div>
  );
};

export default Node;
