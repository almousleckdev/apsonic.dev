'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Something went wrong!</h2>
            <p className="mb-8 max-w-md text-gray-500">
                An error occurred while loading this page.
            </p>
            <div className="flex gap-4">
                <Button
                    onClick={() => reset()}
                    variant="outline"
                    className="rounded-xl px-6 h-12"
                >
                    Try again
                </Button>
                <Button
                    onClick={() => window.location.href = '/'}
                    className="rounded-xl px-6 h-12"
                >
                    Go Home
                </Button>
            </div>
        </div>
    );
}
