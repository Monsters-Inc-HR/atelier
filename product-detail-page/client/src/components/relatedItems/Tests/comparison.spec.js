import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Comparison from '../Comparison';

describe('Comparison component', () => {
  test('renders comparison table correctly', async () => {
    const closeCompareMock = jest.fn();
    const focusedItem = {
      name: 'Product A',
      features: [
        { feature: 'Feature 1', value: 'Value 1' },
        { feature: 'Feature 2', value: 'Value 2' },
      ],
    };
    const product = {
      name: 'Product B',
      features: [
        { feature: 'Feature 1', value: 'Value 3' },
        { feature: 'Feature 3', value: 'Value 4' },
      ],
    };

    render(
      <Comparison
        closeCompare={closeCompareMock}
        focusedItem={focusedItem}
        product={product}
        productID="123"
      />
    );

    await waitFor(() => {
      expect(screen.getByText('Comparing')).toBeInTheDocument();
      expect(screen.getByText('Product A')).toBeInTheDocument();
      expect(screen.getByText('Product B')).toBeInTheDocument();
      expect(screen.getByText('Feature 1')).toBeInTheDocument();
      expect(screen.getByText('Value 1')).toBeInTheDocument();
      expect(screen.getByText('Value 3')).toBeInTheDocument();
      expect(screen.getByText('Feature 2')).toBeInTheDocument();
      expect(screen.getByText('Value 2')).toBeInTheDocument();
      expect(screen.getByText('Feature 3')).toBeInTheDocument();
      expect(screen.getByText('Value 4')).toBeInTheDocument();
    });
  });

  test('calls closeCompare function on click', async () => {
    const closeCompareMock = jest.fn();
    const focusedItem = {
      name: 'Product A',
      features: [
        { feature: 'Feature 1', value: 'Value 1' },
        { feature: 'Feature 2', value: 'Value 2' },
      ],
    };
    const product = {
      name: 'Product B',
      features: [
        { feature: 'Feature 1', value: 'Value 3' },
        { feature: 'Feature 3', value: 'Value 4' },
      ],
    };

    render(
      <Comparison
        closeCompare={closeCompareMock}
        focusedItem={focusedItem}
        product={product}
        productID="123"
      />
    );

    const comparisonComponent = screen.getByRole('button');
    fireEvent.click(comparisonComponent);

    await waitFor(() => {
      expect(closeCompareMock).toHaveBeenCalledTimes(1);
    });
  });
});