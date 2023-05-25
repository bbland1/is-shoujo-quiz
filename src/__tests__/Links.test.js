import { render, screen } from "@testing-library/react"
import Links from "../Components/Links/LinksPage"
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

// testing for the links at the bottom of the page
test("Anilist Link", () => {
  render(<Links/>, {wrapper: BrowserRouter}
  );

  const anilistLink = screen.getByTestId("Anilist-Link");
  expect(anilistLink).toBeInTheDocument();
});

test("Anilist Correct Url", () => {
  render(<Links/>, {wrapper: BrowserRouter});

  const anilistLink = screen.getByTestId("Anilist-Link");
  expect(anilistLink.href).toContain("https://anilist.co/");
});

test("My Anime List Link", () => {
  render(<Links/>, {wrapper: BrowserRouter}
  );

  const myAnimeListLink = screen.getByTestId("MAL-Link");
  expect(myAnimeListLink).toBeInTheDocument();
});

test("My Anime List Correct Url", () => {
  render(<Links/>, {wrapper: BrowserRouter});

  const  myAnimeListLink = screen.getByTestId("MAL-Link");
  expect( myAnimeListLink.href).toContain("https://myanimelist.net/");
})