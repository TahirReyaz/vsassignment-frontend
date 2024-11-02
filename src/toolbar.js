// toolbar.js

import {
  ArrowLeftRightIcon,
  BrainCircuitIcon,
  CirclePlayIcon,
  FileInputIcon,
  FileOutputIcon,
  ScrollTextIcon,
} from "lucide-react";

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className=" bg-white p-4 shadow-lg shadow-gray-100">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" Icon={FileInputIcon} />
        <DraggableNode
          type="customOutput"
          label="Output"
          Icon={FileOutputIcon}
        />
        <DraggableNode type="llm" label="LLM" Icon={BrainCircuitIcon} />
        <DraggableNode type="text" label="Text" Icon={ScrollTextIcon} />
        <DraggableNode type="dualNode" label="Dual" Icon={ArrowLeftRightIcon} />
        <DraggableNode type="pipeline" label="Pipeline" Icon={CirclePlayIcon} />
      </div>
    </div>
  );
};
