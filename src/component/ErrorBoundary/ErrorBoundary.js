import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    state = {
        isError: false
    }

    componentDidCatch() {
        this.setState(prevState =>({isError : !prevState.isError}))
    }

    render() {
        return (
            <div>
                {this.state.isError ? 'Something Went Wrong' : this.props.children}
            </div>
        )
    }
}

export default ErrorBoundary
