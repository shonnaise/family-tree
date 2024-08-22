import { memo } from "react";
import { Handle, Position } from "@xyflow/react";

function Marriage() {
  return (
    <div>
      <div className="">
        <div className="flex border-2 rounded-full w-5 h-5"></div>
        <Handle id="tLeft" type="target" position={Position.Left} className="" />
        <Handle id="tRight" type="target" position={Position.Right} className="" />
        <Handle id="sBottom" type="source" position={Position.Bottom} className="" />
      </div>
    </div>
  );
}

export default memo(Marriage);
