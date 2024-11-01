import React from "react";

import { ReactComponent as AcyclicIcon } from "./assets/acyclic.svg";
import { ReactComponent as CyclicIcon } from "./assets/cyclic.svg";

const Alert = ({ numNodes, numEdges, isDag }) => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <div className="bg-vsPurpleLight rounded-full text-white text-2xl font-semibold p-1 size-12 flex items-center justify-center">
          {numNodes}
        </div>
        <p>Nodes</p>
      </div>

      <div>
        <div className="bg-vsPurpleLight rounded-full text-white text-2xl font-semibold p-1 size-12 flex items-center justify-center">
          {numEdges}
        </div>
        <p>Edges</p>
      </div>

      <div>
        <div className="bg-vsPurpleLight rounded-full text-white text-2xl font-semibold p-1 size-12 flex items-center justify-center">
          {isDag ? <AcyclicIcon /> : <CyclicIcon />}
        </div>
        <p>{isDag ? "DAG" : "Not DAG"}</p>
      </div>
    </div>
  );
};

export default Alert;
