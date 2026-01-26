'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">Something went wrong</h2>
                    <p className="mb-8 max-w-md text-gray-500">
                        We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
                    </p>
                    <Button
                        onClick={() => window.location.reload()}
                        className="rounded-xl px-8 h-12"
                    >
                        Reload Page
                    </Button>
                    {process.env.NODE_ENV === 'development' && (
                        <pre className="mt-8 max-w-full overflow-auto rounded-lg bg-red-50 p-4 text-left text-xs text-red-700">
                            {this.state.error?.message}
                        </pre>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}
