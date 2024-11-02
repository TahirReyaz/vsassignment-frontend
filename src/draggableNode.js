// draggableNode.js

export const DraggableNode = ({ type, label, Icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`size-14 text-sm text-center text-black/60 border-2 grid grid-cols-1 justify-center items-center border-black/50 rounded ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
      }}
      draggable
    >
      <Icon className="mx-auto" />
      <span className="text-xs">{label}</span>
    </div>
  );
};
