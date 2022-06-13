import React, { Component } from "react";

interface IErrorBoundary {
  FallbackUIComponent: React.FC;
  children: any;
}

class ErrorBoundary extends Component<IErrorBoundary> {
  state = {
    error: null,
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error: error });
  }

  render() {
    const { FallbackUIComponent } = this.props;
    if (this.state.error) {
      //@ts-ignore
      return <FallbackUIComponent {...this.props} />;
    }
    return this.props.children;
  }
}

function withErrorBoundary(WrappedComponent: any, errorBoundaryProps: any) {
  return function Wrapped(props: any) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
}

export default withErrorBoundary;
