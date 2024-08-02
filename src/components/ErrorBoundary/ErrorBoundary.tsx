import logo from '@assets/icons/museum-logo-light.svg';
import React, { Component, ErrorInfo } from 'react';

import { ErrorBoundaryComponent, ErrorBoundaryTitle } from './styled';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryComponent>
          <img src={logo} alt="logo" />
          <ErrorBoundaryTitle>Something went wrong</ErrorBoundaryTitle>
        </ErrorBoundaryComponent>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
