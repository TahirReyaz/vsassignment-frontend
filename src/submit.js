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
            numEdges: res?.num_edges ?? 0,
            numNodes: res?.num_nodes ?? 0,
            isDag: !!res?.is_dag,
          }}
        />
      );
    } catch (error) {
      toast.error("Error occurred while processing the data");
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
