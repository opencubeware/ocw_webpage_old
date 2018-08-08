import * as React from 'react'
import Navbar from './components/navbar/Navbar'

export default class Root extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}
