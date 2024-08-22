import { useConnection } from "@xyflow/react";

type Props = {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
};

export const CustomConnection = ({ fromX, fromY, toX, toY }: Props) => {
  const { fromHandle } = useConnection();

  if (fromHandle && fromHandle.id) {
    return (
      <g>
        <path fill="none" stroke={fromHandle.id} strokeWidth={1.5} className="animated" d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`} />
        <circle cx={toX} cy={toY} fill="#135" r={3} stroke={fromHandle.id} strokeWidth={1.5} />
      </g>
    );
  } else {
    return <></>;
  }
};
