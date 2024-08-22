import React, { useCallback } from "react";
import { ReactFlow, useNodesState, useEdgesState, addEdge, MiniMap, Controls, OnConnect, Node, NodeProps } from "@xyflow/react";

import "@xyflow/react/dist/base.css";

import Person from "./PersonNode";
import Marriage from "./Marriage";
import { CustomConnection } from "./CustomConnectionLine";
const nodeTypes = {
  person: Person,
  marriage: Marriage,
};

const initNodes: Node[] = [
  {
    id: "a60b1f01-4507-4ca7-a57f-f7196ce0eb5f",
    type: "person",
    data: { name: "フグ多マスオ", job: "CEO", emoji: "😎" },
    position: { x: 0, y: 0 },
  },
  {
    id: "f1ad19a3-78f1-47bf-b98d-983404ecc2fa",
    type: "person",
    data: { name: "フグ多サザエ", job: "Designer", emoji: "🤓" },

    position: { x: 200, y: 0 },
  },
  {
    id: "83ca965d-1c76-48f6-8e35-3d34a34ed8a0",
    type: "marriage",
    data: { name: "Kristi Price", job: "Developer", emoji: "🤩" },
    position: { x: 100, y: 0 },
  },
];

const initEdges = [
  {
    id: "a980e8c6-d4c1-48ed-a80c-2b8dd677fd49",
    source: "1",
    target: "3",
    sourceHandle: "sRight",
    targetHandle: "tLeft",
  },
  {
    id: "91e7a32c-4672-4166-8e16-1b28d511d8d1",
    source: "2",
    target: "3",
    sourceHandle: "sLeft",
    targetHandle: "tRight",
  },
];

const App = () => {
  const [nodes, , onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const onConnect: OnConnect = useCallback((connection) => setEdges((eds) => addEdge(connection, eds)), []);

  return (
    <div style={{ height: 800 }}>
      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} nodeTypes={nodeTypes} fitView className="bg-teal-50">
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default App;
