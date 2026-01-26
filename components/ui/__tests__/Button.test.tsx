import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';
import React from 'react';

describe('Button Component', () => {
    it('renders children correctly', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('handles click events', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click me</Button>);

        fireEvent.click(screen.getByText('Click me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('shows loading spinner when loading prop is true', () => {
        render(<Button loading>Submit</Button>);
        // The loading spinner is a span with animate-spin class
        const spinner = document.querySelector('.animate-spin');
        expect(spinner).toBeInTheDocument();
    });

    it('is disabled when loading prop is true', () => {
        render(<Button loading>Submit</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('is disabled when disabled prop is true', () => {
        render(<Button disabled>Submit</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('renders icon when provided', () => {
        const icon = <span data-testid="test-icon">icon</span>;
        render(<Button icon={icon}>With Icon</Button>);
        expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('applies correct variant classes', () => {
        const { rerender } = render(<Button variant="primary">Primary</Button>);
        let button = screen.getByRole('button');
        expect(button.className).toContain('bg-brand-green');

        rerender(<Button variant="outline">Outline</Button>);
        button = screen.getByRole('button');
        expect(button.className).toContain('text-brand-green');
        expect(button.className).toContain('border-brand-green');
    });
});
