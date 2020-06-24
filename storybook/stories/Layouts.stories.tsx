import React from "react"
import { EPODWelcome, SideBySide } from "@epod/ui"

export default {
  title: "Layouts",
}

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = (props?: Partial<any>) => (
  <SideBySide
    Left={<EPODWelcome message={"mina"} />}
    leftStyle={{ border: "solid 1px black" }}
    Right={<div>Lorem ipsum</div>}
    rightStyle={{ backgroundColor: "red" }}
  />
)
