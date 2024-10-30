import Variable from './Variable.jsx';
import { useEffect, useState } from 'react';
import './add.css';


function Add() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    useEffect(() => {
        setA(0);
        setB(0);
    }, []);
        return (
        <div className='add-container'>
            <h3 className='add-title'>ADD</h3>
            <h2 className='add-display'>
            <span className='add-a'>A = {a}</span>
            <span className='add-a-b'>A + B = {a+b}</span>
            <span className='add-b'>B = {b}</span>
            </h2>

            <div className='add-variable'>
                <Variable type={'int'} name={'A'} count={a} setCount={setA}/> {/* Corrected prop passing */}
                <Variable type={'int'} name={'B'} count={b} setCount={setB}/>
            </div>
        </div>
    );
}

export default Add;
