import React, { useState } from 'react';
import './counter.css'; // Import CSS ที่เกี่ยวข้อง


function Counter({type,name,count, setCount}) {
  // const [{name,count, setCount}] = useState(0); // ใช้ useState เพื่อจัดการค่า counter
       

  return (
    <div className='counter'>
      <h3 className='title'>{name || 'Counter'}</h3>
      <div className="counter-controls">
        <button onClick={() => setCount(count - 1)} className="btn-danger">-</button>
        <span>{type && type === 'int'? count : count.toFixed(2)}</span>
        <button  onClick={() => setCount(count + 1)} className="btn-success">+</button>
      </div>
    </div>
  );
}

export default Counter;
