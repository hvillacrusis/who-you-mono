import React from 'react';

import { HeaderLayout } from '../layouts/card-header-layout';

export interface IDeliveryHeaderProps {
  deliveryNumber: String;
  customerName: String;
  onClickAction: () => void;
}

const DeliveryHeader = (props: IDeliveryHeaderProps) => {
  const { deliveryNumber, customerName, onClickAction } = props;
  return (
    <HeaderLayout
      title={<div>delivery header</div>}
      titleContainerStyle={{
        borderBottom: '1px solid #CCC',
        paddingBottom: '2px',
      }}
      body={
        <div>
          <div>{customerName}</div>
          <div>{deliveryNumber}</div>
        </div>
      }
      titleAction={
        <div>
          <button onClick={onClickAction}> action</button>
        </div>
      }
    ></HeaderLayout>
  );
};

export default DeliveryHeader;
