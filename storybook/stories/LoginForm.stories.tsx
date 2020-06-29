import React, { ReactElement } from "react"

import { storiesOf } from "@storybook/react"
import { Formik } from "formik"

import { DeliveryHeader, CenteredContent } from "@epod/ui"

storiesOf("Sign In Form", module).add(
  "Default Sign In Form",
  (props?: Partial<any>) => (
    <LoginForm
      submitButtonText="Sign In"
      onSubmit={(values) => console.log(values)}
      initialData={{ username: "", password: "" }}></LoginForm>
  ),
)

export interface IFlexedColumn {
  containerStyle?: React.CSSProperties
  children: React.ReactChild
}

export interface ILoginFormData {
  username: string
  password: string
}

export interface ILoginForm {
  titleStyle?: React.CSSProperties
  containerStyle?: React.CSSProperties
  submitButtonText: string
  buttonStyle?: React.CSSProperties
  onSubmit(values: object): void
  initialData: ILoginFormData
}

interface ITextInputItem {
  placeholder: string
  name: string
  value: string
}

export interface ITextInputCol {
  columns: ITextInputItem[]
  onChange(field: string, value: any, shouldValidate?: boolean): void
}
const TextInputCol = (props: ITextInputCol) => {
  const { columns, onChange } = props
  return (
    <React.Fragment>
      {columns.map((item: any) => (
        <input
          name={item.name}
          value={item.value}
          placeholder={item.placeholder}
          onChange={(e: any) => onChange(item.name, e.target.value)}></input>
      ))}
    </React.Fragment>
  )
}

const LoginForm = (props: ILoginForm) => {
  const {
    titleStyle,
    submitButtonText,
    buttonStyle,
    onSubmit,
    initialData,
  } = props
  return (
    <Formik
      initialValues={{ ...initialData }}
      onSubmit={(values) => {
        onSubmit(values)
      }}>
      {({ handleSubmit, values, setFieldValue }) => {
        return (
          <FlexColumnLayout>
            <React.Fragment>
              <span style={{ ...titleStyle }}>Sign In</span>
              <TextInputCol
                columns={[
                  {
                    placeholder: "Username",
                    name: "username",
                    value: values.username,
                  },
                  {
                    placeholder: "Password",
                    name: "password",
                    value: values.password,
                  },
                ]}
                onChange={setFieldValue}></TextInputCol>
              <button
                style={{ ...buttonStyle }}
                onClick={() => {
                  handleSubmit()
                }}
                type="submit">
                {submitButtonText}
              </button>
            </React.Fragment>
          </FlexColumnLayout>
        )
      }}
    </Formik>
  )
}

const FlexColumnLayout = (props: IFlexedColumn) => {
  const { containerStyle, children } = props
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...containerStyle,
      }}>
      {children}
    </div>
  )
}
