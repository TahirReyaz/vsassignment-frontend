import { shallow } from "zustand/shallow";
import { useStore } from "./store";
import { getDag } from "./lib/api";
import { toast } from "react-toastify";
import Alert from "./alert";

export const SubmitButton = () => {
  const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
  });
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const res = await getDag(nodes, edges);
      toast(
        <Alert
          {...{
            numEdges: res.num_edges,
            numNodes: res.num_nodes,
            isDag: res.is_dag,
          }}
        />
      );
      console.log({ res });
    } catch (error) {
      toast.error("There was some problem processing the data");
      console.error(error);
    }
  };

  return (
    <div className="bg-vsPurpleLight rounded px-2 py-1 text-white mx-auto w-fit">
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
