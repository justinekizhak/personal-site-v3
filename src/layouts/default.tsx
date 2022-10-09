import { Component, JSX } from "solid-js"

interface IDefaultLayout {
  children: JSX.Element
}

const DefaultLayout: Component<IDefaultLayout> = (props) => {
  return <main>{props.children}</main>
}

export default DefaultLayout
