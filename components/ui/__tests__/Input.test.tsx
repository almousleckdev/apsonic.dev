import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../Input';
import React from 'react';

describe('Input Component', () => {
    it('renders label correctly', () => {
        render(<Input label="Username" id="user" />);
        expect(screen.getByText('Username')).toBeInTheDocument();
    });

    it('handles value changes', () => {
        const handleChange = vi.fn();
        render(<Input label="User" id="user" onChange={handleChange} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'new value' } });

        expect(handleChange).toHaveBeenCalled();
    });

    it('shows error message when provided', () => {
        render(<Input label="User" id="user" error="Invalid input" />);
        expect(screen.getByText('Invalid input')).toBeInTheDocument();
    });
});
