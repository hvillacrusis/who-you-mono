import React from "react"

import { storiesOf } from "@storybook/react"

import { DeliveryHeader } from "@epod/ui"

storiesOf("Delivery", module).add("Delivery Header", (props?: Partial<any>) => (
  <DeliveryHeader
    deliveryNumber="DN00123"
    customerName="John 32"
    onClickAction={() => {
      console.log("hi there")
    }}></DeliveryHeader>
))
