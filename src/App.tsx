import { useCallback, useState } from 'react';
import './App.css';
import { Progressbar } from './progressbar/progressbar';
function App() {
  const [status, setStatus] = useState<"Play" | "Stop" | "Reset">("Reset")

  const changeStatus = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setStatus((e.target as any).name);
  }, [])

  return (
    <div className='content'>
      <div className='example'>
        <h1>Progress Bar</h1>
        <Progressbar status={status} />
        <div className='buttons'>
          <button name='Play' onClick={changeStatus} >Start</button>
          <button name='Stop' onClick={changeStatus}> Stop</button>
          <button name='Reset' onClick={changeStatus}>Reset</button>
        </div>
        <div>
          <span>Estado Actual:</span>
          <span>{status}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
