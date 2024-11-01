export const nodeProps = {
  customInput: {
    title: "Input",
    label: "Name:",
    userInput: true,
    rightHandles: ["value"],
  },
  llm: {
    title: "LLM",
    label: "This is a LLM",
    leftHandles: ["system", "prompt"],
    rightHandles: ["response"],
  },
  text: {
    title: "Text",
    label: "Name:",
    userInput: true,
    rightHandles: ["output"],
  },
  customOutput: {
    title: "Output",
    label: "Name:",
    userInput: true,
    leftHandles: ["value"],
  },
  dualNode: {
    title: "Dual",
    label: "Name:",
    userInput: false,
    leftHandles: ["system", "prompt"],
    rightHandles: ["response", "request"],
  },
};

export const backendUrl = "http://127.0.0.1:8000";
