import React from 'react';
import RatingFilter from './RatingFilter.js';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-Event';

describe('RatingFilter', () => {
  const mockUpdateRating = jest.fn();

  beforeEach(() => {
    render(
      <RatingFilter
      updateRating={ mockUpdateRating }
      />
    )
  })

  it('should render min and max inputs on the home page', () => {
    const min = screen.getByPlaceholderText("min");
    const max = screen.getByPlaceholderText("max");

    expect(min).toBeInTheDocument();
    expect(max).toBeInTheDocument();
  })

  it('should call updateText on change', () => {
    const min = screen.getByPlaceholderText("min");
    userEvent.type(min, "7");

    expect(mockUpdateRating).toHaveBeenCalled();
    expect(min.value).toBe("7");
  })
})
