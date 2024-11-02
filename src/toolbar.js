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
        <DraggableNode type="dummy1" label="Dummy 1" Icon={CirclePlayIcon} />
        <DraggableNode type="dummy2" label="Dummy 2" Icon={CirclePlayIcon} />
        {/* <DraggableNode type="dummy3" label="Dummy 3" Icon={CirclePlayIcon} /> */}
      </div>
    </div>
  );
};
