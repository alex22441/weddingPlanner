// src/components/ErrorBoundary.js
import React from 'react';
import { Typography, Container } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Typography variant="h4" color="error">
            Something went wrong.
          </Typography>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
