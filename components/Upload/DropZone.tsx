import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider, DropTargetMonitor } from 'react-dnd';
import { TargetBox } from '../TargetBox';

type Props = {
  onDrop: (item: any, monitor: DropTargetMonitor) => void;
  file?: File | null;
};

const DropZone: React.FC<Props> = ({ onDrop, file }) => (
  <DndProvider backend={HTML5Backend}>
    <TargetBox onDrop={onDrop}>
      {file &&
        `File ${file.name} uploaded with the size of ${file.size / 1000} MB`}
    </TargetBox>
  </DndProvider>
);

export default DropZone;
