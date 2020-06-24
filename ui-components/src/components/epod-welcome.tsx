import React from 'react';

export interface IProps {
  message: string;
}

const EPODWelcome = (props: IProps) => {
  const { message } = props;
  return (
    <div>
      EPOD components, halo <span>{message}!</span>
    </div>
  );
};

export default EPODWelcome;
