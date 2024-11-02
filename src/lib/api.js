import { backendUrl } from "../constants";

export const getDag = async (nodes, edges) => {
  try {
    const response = await fetch(`${backendUrl}/pipelines/parse`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nodes, edges }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting data:", error);
    throw error;
  }
};
