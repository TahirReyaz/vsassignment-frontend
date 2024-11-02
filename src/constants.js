/*
  To add a new node, add an object in the node props with the structure:
  nodeName: {
    title: string,
    label: string,
    userInput: boolean,
    leftHandles: [string],
    rightHandles: [string]
  }
  userInput determines whether there will be an input field or not
  leftHandles contains the ids of the target handles
  rightHandles contains the ids of the source handles

  After adding the type here, go to toolbar.js and add a new Draggable node there
*/

export const nodeProps = {
  customInput: {
    title: "Input",
    label: "Name",
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
    label: "Name",
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
    label: "Name",
    userInput: false,
    leftHandles: ["system", "prompt"],
    rightHandles: ["response", "request"],
  },
  pipeline: {
    title: "Pipeline",
    lable: "Name",
    userInput: true,
    leftHandles: ["input"],
    rightHandles: ["output"],
  },
  dummy1: {
    title: "Dummy 1",
    lable: "Name",
    userInput: true,
    leftHandles: ["input"],
    rightHandles: ["output"],
  },
  dummy2: {
    title: "Dummy 2",
    lable: "Name",
    userInput: true,
    leftHandles: ["input"],
    rightHandles: ["output"],
  },
  // dummy3: {
  //   title: "Dummy 3",
  //   lable: "Name",
  //   userInput: true,
  //   leftHandles: ["input"],
  //   rightHandles: ["output"],
  // },
};

export const backendUrl = "http://127.0.0.1:8000";
