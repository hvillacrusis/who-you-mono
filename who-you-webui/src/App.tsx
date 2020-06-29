import React from "react"
import logo from "./logo.svg"
import "./App.css"

import { DeliveryHeader } from "@epod/ui"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DeliveryHeader
          customerName={"john does nothing"}
          deliveryNumber={"number 123"}
          onClickAction={() => {
            console.log("onclick sa webui")
          }}></DeliveryHeader>
      </header>
    </div>
  )
}

export default App
