import { ToastContainer } from "react-toastify";

import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      {/* <Nodebar /> */}
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
      <ToastContainer />
    </div>
  );
}

export default App;
