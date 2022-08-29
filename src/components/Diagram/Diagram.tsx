import React, { useLayoutEffect, useRef, useState } from 'react';
import DiagramItem from './Diagram-item/DiagramItem';
import './Diagram.css';

export interface inputI  {
  name: string,
  time: number
}

function Diagram() {
  const [data, setData] = useState<inputI[]>([
    { name: "Landing Page", time: 7.4 },
    { name: "Configurator", time: 0.2 },
    { name: "Check-out", time: 7.0 },
    { name: "Deal", time: 3.8 }
  ]);

  const btnRef = useRef<HTMLButtonElement>(null);
  
  let allTimeSpent = 0;
  data.forEach((item: inputI) => allTimeSpent += item.time);

  const changeData = () => {
    let changedData: inputI[] = []; 
    data.forEach((item: inputI) => changedData.push({...item, time: Math.random() * 10}));
    setData(changedData);
  }

  useLayoutEffect(() => {
    setInterval(() => {
      if (null !== btnRef.current) {
        btnRef.current.click();
      }
    }, 31800);
  }, []);

  return (
    <div className="diagram">
      <h1 className='diagram__heading'>Spent time(seconds)</h1>
      <button ref={btnRef} onClick={changeData} data-testid="changeDataBtn">Change values</button>
      {
        data.map((item: inputI, index: number) => {
          let prevItemsPercent = 0;  
          const currentPercent = Math.floor(100 * item.time / allTimeSpent);  
          if (index - 1 >= 0 ){
            for (let i = 1; i <= index; i++) {
              prevItemsPercent += Math.floor(100 * data[index - i].time / allTimeSpent); 
            }
          }    
          return <DiagramItem key={item.name} name={item.name} prevItemPercent={prevItemsPercent} percent={currentPercent}></DiagramItem>
        })
      }
    </div>
  );
}

export default Diagram;
