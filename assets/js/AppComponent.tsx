import React from 'react';
import { Navbar } from './components/navbar/Navbar'
import { Main } from './components/Main'

export class AppComponent extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div >
    );
  }
}
