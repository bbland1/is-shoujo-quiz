/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Links from './LinksPage';
// import '@testing-library/jest-dom';

// testing for the links at the bottom of the page
test('Anilist Link', () => {
  render(<Links />, { wrapper: BrowserRouter });

  const anilistLink = screen.getByTestId('Anilist-Link');
  expect(anilistLink).toBeInTheDocument();
});

test('Anilist Correct Url', () => {
  render(<Links />, { wrapper: BrowserRouter });

  const anilistLink: HTMLAnchorElement = screen.getByTestId('Anilist-Link');
  expect(anilistLink.href).toContain('https://anilist.co/');
});

test('My Anime List Link', () => {
  render(<Links />, { wrapper: BrowserRouter });

  const myAnimeListLink = screen.getByTestId('MAL-Link');
  expect(myAnimeListLink).toBeInTheDocument();
});

test('My Anime List Correct Url', () => {
  render(<Links />, { wrapper: BrowserRouter });

  const myAnimeListLink: HTMLAnchorElement = screen.getByTestId('MAL-Link');
  expect(myAnimeListLink.href).toContain('https://myanimelist.net/');
});
