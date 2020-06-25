import React from 'react';

export interface IProps {
  Left: React.ReactNode;
  Right: React.ReactNode;
  containerStyle?: React.CSSProperties;
  leftStyle?: React.CSSProperties;
  rightStyle?: React.CSSProperties;
}

const SideBySideLayout = (props: IProps) => {
  const { Left, Right, leftStyle, rightStyle, containerStyle } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        ...containerStyle,
      }}
    >
      <div style={{ ...leftStyle }}>{Left}</div>
      <div style={{ ...rightStyle }}>{Right}</div>
    </div>
  );
};

export default SideBySideLayout;
