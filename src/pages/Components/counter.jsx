import './counter.css';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className='counter'>
            <h3>Counter</h3>
            <div className='counter-controls'>
                <button className="btn-danger" onClick={decrement}>-</button>
                <span>{count}</span>
                <button className="btn-success" onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default Counter;
