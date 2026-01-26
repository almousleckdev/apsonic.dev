import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '../Card';
import React from 'react';

describe('Card Component', () => {
    it('renders children correctly', () => {
        render(
            <Card>
                <p>Card Content</p>
            </Card>
        );

        expect(screen.getByText('Card Content')).toBeInTheDocument();
    });

    it('renders without title', () => {
        render(<Card>Just Content</Card>);
        expect(screen.getByText('Just Content')).toBeInTheDocument();
        expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    });
});
