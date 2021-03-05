import React, { Component } from 'react'
import ErrorBoundary from '../../component/ErrorBoundary/ErrorBoundary'
import Header from '../../component/Header/Header'
const HeaderPage = () => (
  <ErrorBoundary>
    <Header />
  </ErrorBoundary>
)

export class App extends Component {
  render() {
    return (
      <div>
        <HeaderPage />
      </div>
    )
  }
}

export default App
