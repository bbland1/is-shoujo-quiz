// /* eslint-disable react/jsx-filename-extension */
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';
import { render, screen, userEvent } from './utils/test-utils'
import { beforeAll, beforeEach } from 'vitest';


// describe('full app rendering/navigating', async () => {
//   // it('that home page renders correctly',  () => {
//   //   // render(<App />,);
//   //   // const user = userEvent.setup();
//   //   // // verify page content for default route
    
//   // })
describe('full app rendering/navigating', async () => {
  beforeEach(() => {
    render(<App/>, { wrapper: MemoryRouter });
  });

  test('home page renders correctly', () => {
      expect(screen.getByText(/What's with the site?/)).toBeInTheDocument();
  })

  test('quiz page renders correctly from nav', async () => {
      console.log(screen.getByTestId('to-quiz-page-nav'));
      await userEvent.click(screen.getByTestId('to-quiz-page-nav'));
  
      expect(screen.getByText(/Is it a Shoujo?/)).toBeInTheDocument()
  })

  test('links page renders correctly', async () => {
    await userEvent.click(screen.getByTestId('to-links-page'));
    

    expect(screen.getByText(/Shojo Manga:/)).toBeInTheDocument();
  })

  test('head to quiz button takes to quiz', async () => {
    await userEvent.click(screen.getByTestId('to-quiz-page'));
    expect(screen.getByTestId('quiz-start-page')).toBeInTheDocument();
  });
});


// // test('landing on a bad page', () => {
// //   const badRoute = '/quizes'

// //   // use <MemoryRouter> when you want to manually control the history
// //   render(
// //     <MemoryRouter initialEntries={[badRoute]}>
// //       <App />
// //     </MemoryRouter>
// //   );

// //   // verify navigation to "no match" route
// //   expect(screen.getByText(/q/)).toBeInTheDocument();
// // })

