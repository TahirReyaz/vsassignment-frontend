import { shallow } from "zustand/shallow";
import { useStore } from "./store";
import { getDag } from "./lib/api";

export const SubmitButton = () => {
  const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
  });
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const res = await getDag(nodes, edges);
      console.log({ res });
    } catch (error) {
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
