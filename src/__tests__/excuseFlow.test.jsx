import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ExcuseProvider } from '../context/ExcuseProvider';
import ExcuseCard from '../components/ExcuseCard';
import GenerateBtn from '../components/GenerateBtn';

vi.mock('../utils/getRandomExcuse', () => ({
  default: vi.fn(() => 'Test excuse from mock'),
}));

describe('Excuse generation flow', () => {
  it('shows empty state before generating any excuse', () => {
    render(
      <ExcuseProvider>
        <ExcuseCard />
        <GenerateBtn />
      </ExcuseProvider>,
    );

    expect(
      screen.getByText('No excuses generated yet. Click the button to generate one!'),
    ).toBeInTheDocument();
  });

  it('updates card content after clicking Generate Excuse', () => {
    render(
      <ExcuseProvider>
        <ExcuseCard />
        <GenerateBtn />
      </ExcuseProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Generate Excuse' }));

    expect(screen.getByText('Test excuse from mock')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
