import React from "react"
import { Thing, Props } from "../src"
import { EPODWelcome } from "@epod/ui"

export default {
  title: "Welcome",
}

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = (props?: Partial<Props>) => (
  <EPODWelcome message={"mina"} />
)
