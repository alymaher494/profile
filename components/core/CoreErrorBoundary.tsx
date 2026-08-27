"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * CoreErrorBoundary — isolates the WebGL layer.
 * If the 3D Core fails (no WebGL, context loss, driver error), the rest of
 * the page — including all hero/section copy — must stay alive and visible.
 * The 3D is identity, never a content dependency.
 */
export class CoreErrorBoundary extends Component<Props, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // Intentionally silent: degrade gracefully to the fallback.
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}
