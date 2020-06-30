import React from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import { useDrop, DropTargetMonitor } from 'react-dnd';

export interface TargetBoxProps {
  onDrop: (props: TargetBoxProps, monitor: DropTargetMonitor) => void;
}

export const TargetBox: React.FC<TargetBoxProps> = (props) => {
  const { onDrop, children } = props;
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [NativeTypes.FILE],
    drop(item, monitor) {
      onDrop(props, monitor);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  return (
    <div
      ref={drop}
      className={`w-64 h-64 bg-gray-300 rounded shadow p-8 transition duration-500 text-gray-800 ${
        isActive && 'bg-green-500'
      }`}
    >
      <div>{isActive ? 'Release to drop' : 'Drag file here'}</div>
      <div>{children}</div>
    </div>
  );
};
