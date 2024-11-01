import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
// import Nodebar from "./nodebar";

function App() {
  return (
    <div>
      {/* <Nodebar /> */}
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
