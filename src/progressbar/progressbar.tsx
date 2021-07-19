import './progressbar.css';
import { useCallback, useEffect, useState } from 'react';
import { ProgressbarItem } from './progressbarItem';

interface IProgressbarProps {
  status: "Play" | "Stop" | "Reset",
  interval?: number
}

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export function Progressbar(props: IProgressbarProps) {
  const { status, interval } = props;
  const [items,] = useState(values);
  const [current, setCurrent] = useState(0);


  const play = useCallback(() => {
    const tmp = setInterval((() => {
      if (current < 15) {
        setCurrent(current + 1)
      }
    }), interval ?? 500)
    return () => clearInterval(tmp);
  }, [current, interval]);


  useEffect(() => {
    switch (status) {
      case "Reset":
        setCurrent(-1);
        break;
      case "Play":
        return play();
      case "Stop":
        return undefined;
      default:
        break;
    }
  }, [status, play]);


  return (
    <div className='progressbar'>
      {items.map((itm, i) => <ProgressbarItem key={itm} status={i < current} />)
      }
    </div>
  );
}
