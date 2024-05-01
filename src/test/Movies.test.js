/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react';
import Movies from '../pages/Movies';

test('adds movie to favorites when clicked', () => {
  const { getByText } = render(<Movies />);
  const addToFavoritesButton = getByText('Add to Favorites');

  fireEvent.click(addToFavoritesButton);
});
