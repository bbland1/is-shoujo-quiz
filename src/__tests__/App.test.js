/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('full app rendering/navigating', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getByText(/What's with the site?/)).toBeInTheDocument();

  // verify page content for expected route after navigating
  await user.click(screen.getByText(/Links/));
  expect(screen.getByText(/Shojo Manga:/)).toBeInTheDocument();

  /* send the test back to the home page
  because it is on the wrong page to check if the it heads to the quiz if not */
  await user.click(screen.getByText(/Home/));
});

test('head to quiz button takes to quiz', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  // I want to be able to change this test to not be linked to the
  await user.click(screen.getByTestId('to-quiz-page'));
  expect(screen.getByTestId('quiz-start-page')).toBeInTheDocument();
});

// test('landing on a bad page', () => {
//   const badRoute = '/quizes'

//   // use <MemoryRouter> when you want to manually control the history
//   render(
//     <MemoryRouter initialEntries={[badRoute]}>
//       <App />
//     </MemoryRouter>
//   );

//   // verify navigation to "no match" route
//   expect(screen.getByText(/q/)).toBeInTheDocument();
// })
