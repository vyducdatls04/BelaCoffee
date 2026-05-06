import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(err) {
    console.error("UI Crash:", err);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 text-center text-red-600 text-xl">
          ⚠️ Có lỗi giao diện – kiểm tra console
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
