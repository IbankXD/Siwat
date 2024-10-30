import { useEffect } from 'react';
import './Timer.css';
import { useState } from 'react';

function Timer() {
    const [running, setRunning] = useState(false);
    const [seconds, setseconds] = useState(0);
    
    useEffect(()=>{
        let interval = null;
        if (running) {
            interval = setInterval(() => {
                setseconds(seconds + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    },[running,seconds])

    function runClick() {
        setRunning(!running);
    }

    function Reset() {
        setRunning(false);
        setseconds(0);
    }

    function secondsTostring(seconds) {
        const Minut_seconds = 60 
        const Hour_seconds = 60 * Minut_seconds
        const Day_seconds = 24 * Hour_seconds 

        const days = Math.floor(seconds / Day_seconds)
        const hours = Math.floor((seconds % Day_seconds) / Hour_seconds)
        const minutes = Math.floor((seconds % Hour_seconds) / Minut_seconds)
        const sec = Math.floor(seconds % Minut_seconds) 

        if (days > 0) {
            return `${days}d ${hours}h ${minutes}m ${sec}s`
        } else if (hours > 0) {
            return `${hours}h ${minutes}m ${sec}s`
        } else if (minutes > 0) {
            return `${minutes}m ${sec}s`
        } else {
            return `${sec}s`
        }
    }

    return (
        <div className="timer-container">
            <h3 className='timer-title'>Timer</h3>
            <p><input type="text" readOnly={true} className="timer-display"
                placeholder="20d 20h 30m 10s" 
                value={secondsTostring(seconds)}/></p>
            <div className="timer-buttons">
                <button className="btn-danger" onClick={Reset}>Reset</button>
                <button className={'btn ' + (running ? 'btn-warning' : 'btn-success')} 
                onClick={runClick}
                >{running ? 'Pause' : 'Run'}</button>
            </div>
        </div>
    );
}

export default Timer;