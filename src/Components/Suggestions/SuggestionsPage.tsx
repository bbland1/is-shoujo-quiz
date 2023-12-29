import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import SuggestForm from "./SuggestionForm";

export default function Suggestions() {
  return (
    <div>
      <header className="header-title">
        <NavBar />
        <h1>Suggestions</h1>
      </header>
      <main className="main-part">
        <h2>Have an anime or manga to stump the quiz?</h2>
        <SuggestForm />
      </main>
      <Footer />
    </div>
  );
}