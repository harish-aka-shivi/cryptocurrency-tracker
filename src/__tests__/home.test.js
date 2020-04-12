import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import useFetchMock from '../hooks/useFetch';
import Home from '../containers/Home';

jest.mock('../hooks/useFetch');

test('test the home component', async () => {
  useFetchMock.mockReturnValue({
    response: {
      data: [
        {
          id: 'bitcoin',
          rank: '1',
          symbol: 'BTC',
          name: 'Bitcoin',
          supply: '18320212.0000000000000000',
          maxSupply: '21000000.0000000000000000',
          marketCapUsd: '127038940503.1804207351031328',
          volumeUsd24Hr: '5491217473.6370119512777181',
          priceUsd: '6934.3597390237853544',
          changePercent24Hr: '0.9219343424078443',
          vwap24Hr: '6854.0560667142971122',
        },
      ],
    },
    loading: false,
    error: false,
  });
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );
  expect(screen.getByRole('button')).toHaveTextContent('Toggle number of columns');
  expect(screen.getByText('Bitcoin')).toBeInTheDocument();
  // test if toggle working
  const table = screen.getByRole('table');
  const changePercent24HrNode = screen.getByText('0.9219343424078443');
  expect(table).toContainElement(changePercent24HrNode);
  fireEvent.click(screen.getByRole('button'));
  expect(table).not.toContainElement(changePercent24HrNode);
});
