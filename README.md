> NOTICE! Hi team, please use yarn for this project. Thank you

> NOTICE! Also, please read [contrib guidelines](/CONTRIBUTING.md)

> NOTICE! For now, external packages/libraries to be installed will be monitored closely, please file an issue in this repo for package requests and ping @odjhey for approval. Include package name, npm url, and reason for package request in your issue. Thank you

# How to / Development Setup

1. Clone `git clone` and install `yarn or yarn install` at root directory

1. Navigate to each directory then `yarn start`

# Package Dependency Structure

1. `ui-components` is a stand alone library of react components

1. the `storybook` package renders and documents members of the `ui-components` package, this package should also show code samples on how to use these components.

1. `create-data-webui`, this package 'marries'/'wires' the data part of the application to the `ui-components`, it also holds website logic, i.e. Routing/Navigation, web-workers, redirects, etc.

1. `create-data-service`, a gql endpoint for all your data needs

# Project Structure

1. ui-components (exported as `@epod/ui`)

   this package contains 2 core modules, the `components` and `layouts` modules. it is exported as `@epod/ui`

   the `components` section contains all dumb/basic components that is to be used in the project

   the `layouts` section contains all reusable and complex layouting needs using the `render props` or `children and family` patters, please refer to [the handbook](http://codee.cafe) for further details.

1. storybook

   minimal contents should include, list of components, layouts, pages/screens
   please use domain specific components naming as much as posible, i.e. DateWidget, DeliveryDetails

1. create-data-webui

   please only import domain specific components as much as possible,

   i.e.

   ```typescript
   import { DriverDetails } from "@epod/ui"; // super good
   import { Button, Layout1, Text } from "@epod/ui"; // very BAD!
   ```

   the goal of this package is for data wiring, business logic, and website related logic

# Where to put what

A basic rule of thumb would be,

all dumb components -> `ui-components`

data wiring logic -> `create-data-webui`

styles (visuals, colors, etc) -> `create-data-webui` (hence it is important to not use hard coded style values)

layout styles -> `ui-components`

do i need to create new layout component for all my basic components? answer is no, you may include layouting structure inside your components, but as soon as layout reuse, or components requiring layout changes arises, please create a layout component.

# Further details

1. Always consider the 'state trio' when creating your components (with data, loading, error). Among this three, _with data_ can also be broken down to two(empty, and not empty), please consider this and create multiple components for each state if needed

1. user input components must always consider the valid, empty, error states. i.e. how will it look like with invalid input, or input is required

1. please use vanilla react as much as possible, functionality first before style

1. [this is a good place to start when confused on how to start a component](https://reactjs.org/docs/thinking-in-react.html)

1. Always read the docs. React docs, typescript docs, javascript docs, reading the docs is the key.

### !Important, This doc is under active development, please revisit from time to time for changes.
