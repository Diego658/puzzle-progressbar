import * as React from 'react';

interface IProgressbarItemProps {
  status: boolean
}


export function ProgressbarItem(props: IProgressbarItemProps) {
  const { status } = props;
  return (
    <div className={`progress-item${status ? ' progress-item--on' : ''}`}>
    </div>
  );
}
