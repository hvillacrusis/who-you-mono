import React from 'react';

export interface IHeaderLayoutProps {
  title: React.ReactNode;
  titleAction: React.ReactNode;
  body: React.ReactNode;
  titleContainerStyle?: React.CSSProperties;
}

const HeaderLayout = (props: IHeaderLayoutProps) => {
  const { title, titleAction, body, titleContainerStyle } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          ...titleContainerStyle,
        }}
      >
        {title}
        {titleAction}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>{body}</div>
    </div>
  );
};

const HeaderLayoutV2 = (props: IHeaderLayoutProps) => {
  const { title, titleAction, body } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>{body}</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        {titleAction}
      </div>
    </div>
  );
};

export { HeaderLayout, HeaderLayoutV2 };
