/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import RelatedButton from '../relatedButton.jsx';

describe('Should render related button component', () => {
  test('renders Button component', async () => {
    const compareMock = jest.fn();

    const { container, getByText } = render(<RelatedButton />);

    expect(container).toMatchSnapshot();

    fireEvent.click(getByText('⭐'));

    await waitFor(() => {
      // expect(compareMock).toHaveBeenCalled();
    });
  });
});