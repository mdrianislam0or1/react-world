/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react';
import MovieListing from '../pages/MovieListing';

test('filters movies based on search query', () => {
  const movies = [
    { id: 1, title: 'Inception', cast: ['Leonardo DiCaprio'], category: 'Action' },
    { id: 2, title: 'The Shawshank Redemption', cast: ['Tim Robbins'], category: 'Drama' },
  ];

  const { getByPlaceholderText, getByText } = render(<MovieListing movies={movies} />);
  const searchInput = getByPlaceholderText('Search by title, cast, or category');
  
  fireEvent.change(searchInput, { target: { value: 'Inception' } });

  expect(getByText('Inception')).toBeInTheDocument();
  expect(getByText('The Shawshank Redemption')).not.toBeInTheDocument();
});
