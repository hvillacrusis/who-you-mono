import React from 'react';

export interface IProps {
  content: React.ReactNode;
  contentContainerStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

const CenteredContent = (props: IProps) => {
  const { content, contentContainerStyle, containerStyle } = props;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        ...containerStyle,
      }}
    >
      <div style={{ ...contentContainerStyle }}>{content}</div>
    </div>
  );
};

export default CenteredContent;
