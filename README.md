> NOTICE! Hi team, please use yarn for this project. Thank you

> NOTICE! Also, please read [contrib guidelines](/CONTRIBUTING.md)

> NOTICE! For now, external packages/libraries to be installed will be monitored closely, please file an issue in this repo for package requests and ping @odjhey for approval. Include package name, npm url, and reason for package request in your issue. Thank you

# How to / Development Setup

1. Clone and install `yarn or yarn install` at root directory

1. Navigate to each directory that `yarn start`

# Package Dependency Structure

1. `ui-components` is a stand alone library of react components

1. the `storybook` package renders and documents members of the `ui-components` package, this package should also show code samples on how to use these components.

1. `create-data-webui`, this package 'marries'/'wires' the data part of the application to the `ui-components`, it also holds website logic, i.e. Routing/Navigation, web-workers, etc.

# Project Structure

1. ui-components (exported as `@epod/ui`)

   this package contains 2 core modules, the `components` and `layouts` modules. it is exported as `@epod/ui`

   the `components` section contains all dumb/basic components that is to be used in the project

   the `layouts` section contains all reusable and complex layouting needs using the `render props` or `children and family` patters, please refer to [the handbook](http://codee.cafe) for further details.

1. storybook
1. create-data-webui

# Where to put what

A basic rule of thumb would be,

all dumb components -> `ui-components`

data wiring logic -> `create-data-webui`

styles (visuals, colors, etc) -> `create-data-webui` (hence it is important to not use hard coded style values)

layout styles -> `ui-components`

do i need to create new layout component for all my basic components? answer is no, you may include layouting structure inside your components, but as soon as layout reuse, or components requiring layout changes arises, please create a layout component.
