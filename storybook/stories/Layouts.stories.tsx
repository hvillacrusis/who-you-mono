import React from "react"

import { storiesOf } from "@storybook/react"

import { EPODWelcome, SideBySide, CenteredContent } from "@epod/ui"

storiesOf("Layouts", module)
  .add("Simple side by side", (props?: Partial<any>) => (
    <SideBySide
      Left={<EPODWelcome message={"mina"} />}
      leftStyle={{ border: "solid 1px black" }}
      Right={<div>Lorem ipsum</div>}
      rightStyle={{ backgroundColor: "red" }}
    />
  ))
  .add("Simple side by side2", (props?: Partial<any>) => (
    <SideBySide
      Left={<div>graph1</div>}
      Right={<div>graph2</div>}
      rightStyle={{ background: "#888", color: "pink" }}
      containerStyle={{ border: "1px dashed blue" }}
    />
  ))
  .add("Centered Content", (props?: Partial<any>) => (
    <CenteredContent content="Centered"></CenteredContent>
  ))
