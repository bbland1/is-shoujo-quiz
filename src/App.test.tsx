import { MemoryRouter } from 'react-router-dom';
import { beforeEach } from 'vitest';
import App from './App';
import { render, screen, userEvent } from './utils/test-utils';

describe('full app rendering/navigating', async () => {
  beforeEach(() => {
    render(<App />, { wrapper: MemoryRouter });
  });

  test('home page renders correctly', () => {
    expect(screen.getByText(/What's with the site?/)).toBeInTheDocument();
  });

  test('quiz page renders correctly from nav', async () => {
    console.log(screen.getByTestId('to-quiz-page-nav'));
    await userEvent.click(screen.getByTestId('to-quiz-page-nav'));

    expect(screen.getByText(/Is it a Shoujo?/)).toBeInTheDocument();
  });

  test('links page renders correctly', async () => {
    await userEvent.click(screen.getByTestId('to-links-page'));

    expect(screen.getByText(/Shojo Manga:/)).toBeInTheDocument();
  });

  test('head to quiz button takes to quiz', async () => {
    await userEvent.click(screen.getByTestId('to-quiz-page'));
    expect(screen.getByTestId('quiz-start-page')).toBeInTheDocument();
  });
});
