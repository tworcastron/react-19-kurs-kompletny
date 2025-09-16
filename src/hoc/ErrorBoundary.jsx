import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: '',
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error.message } 
  }

  componentDidCatch(error, errInfo) {
    // save log
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger m-4">
          Wystąpił jakiś problem: {this.state.error}
        </div>
      )
    }

    return this.props.children
  }
}