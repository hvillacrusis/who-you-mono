import React from "react"

import { storiesOf } from "@storybook/react"

import { EPODWelcome, SideBySide } from "@epod/ui"

storiesOf("Layouts", module).add(
  "Simple side by side",
  (props?: Partial<any>) => (
    <SideBySide
      Left={<EPODWelcome message={"mina"} />}
      leftStyle={{ border: "solid 1px black" }}
      Right={<div>Lorem ipsum</div>}
      rightStyle={{ backgroundColor: "red" }}
    />
  ),
)
