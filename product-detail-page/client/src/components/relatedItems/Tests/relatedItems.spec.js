/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import RelatedItems from '../relatedItems.jsx';

describe('Should render related items component', () => {
  test('renders related items component', async () => {
    const compareMock = jest.fn();

    const { container, getByText } = render(<RelatedItems />);

    expect(container).toMatchSnapshot();


    await waitFor(() => {

    });
  });
});