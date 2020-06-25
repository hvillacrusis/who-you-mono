import React from "react"

import { storiesOf } from "@storybook/react"

//import { EPODWelcome, SideBySide } from "@epod/ui"

storiesOf("Delivery", module).add("Delivery Header", (props?: Partial<any>) => (
  <DeliveryHeader
    deliveryNumber="DN00123"
    customerName="John 32"
    onClickAction={() => {
      console.log("hi there")
    }}></DeliveryHeader>
))

interface IDeliveryHeaderProps {
  deliveryNumber: String
  customerName: String
  onClickAction: () => void
}

const DeliveryHeader = (props: IDeliveryHeaderProps) => {
  const { deliveryNumber, customerName, onClickAction } = props
  return (
    <HeaderLayout
      title={<div>delivery header</div>}
      titleContainerStyle={{
        borderBottom: "1px solid #CCC",
        paddingBottom: "2px",
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
      }></HeaderLayout>
  )
}

interface IHeaderLayoutProps {
  title: React.ReactNode
  titleAction: React.ReactNode
  body: React.ReactNode
  titleContainerStyle?: React.CSSProperties
}
const HeaderLayout = (props: IHeaderLayoutProps) => {
  const { title, titleAction, body, titleContainerStyle } = props
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          ...titleContainerStyle,
        }}>
        {title}
        {titleAction}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>{body}</div>
    </div>
  )
}

const HeaderLayout2 = (props: IHeaderLayoutProps) => {
  const { title, titleAction, body } = props
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>{body}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}>
        {titleAction}
      </div>
    </div>
  )
}
