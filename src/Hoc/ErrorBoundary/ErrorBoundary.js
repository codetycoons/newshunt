import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    state = {
        isError: false
    }

    componentDidCatch() {
        this.setState(prevState => ({ isError: !prevState.isError }))
    }

    render() {
        return (
            <React.Fragment>
                {this.state.isError ? 'Something Went Wrong' : this.props.children}
            </React.Fragment>
        )
    }
}

export default ErrorBoundary
