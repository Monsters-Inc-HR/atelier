/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RelatedButton from '../relatedButton.jsx';

describe('Should render related button component', () => {
  test('renders Button component', () => {
    const compareMock = jest.fn();

    const { getByText } = render(<RelatedButton />);

    fireEvent.click(getByText('⭐'));

    expect(compareMock).toHaveBeenCalled();
  })
})