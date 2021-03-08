import React, { Component } from 'react'
import ErrorBoundary from '../../component/ErrorBoundary/ErrorBoundary'
import Header from '../../component/Header/Header'
import Home from '../../container/Home/Home'
import './App.css'
const HeaderPage = () => (
  <ErrorBoundary >
    <Header />
  </ErrorBoundary>
)

const HomePage = () => (
  <ErrorBoundary>
    <Home />
  </ErrorBoundary>
)

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <HeaderPage />
        </div>
        <div className="marg_btm_10">
          <HomePage />
        </div>
      </React.Fragment>
    )
  }
}

export default App
