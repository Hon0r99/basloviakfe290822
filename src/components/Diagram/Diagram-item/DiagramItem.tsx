import React from 'react';
import './DiagramItem.css';

export interface DiagramItemPropsI {
  name: string,
  prevItemPercent: number,
  percent: number
}

function DiagramItem({name, prevItemPercent, percent}: DiagramItemPropsI) {
  return (
    <div className="diagram-item">
      <p className='diagram-item__name'>{name}</p>
      <div className='diagram-item__view view'>
        <div className='view__colored' data-testid="viewColored" style={{width: percent + 'px', left: prevItemPercent + 'px'}}></div>
      </div>
    </div>
  );
}

export default DiagramItem;