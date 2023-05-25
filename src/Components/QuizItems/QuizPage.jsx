import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import QuizLogic from "./QuizLogic";

function Quiz() {
  return (
    <div>
      <header className="header-title">
        <NavBar />
        <h1 data-testid="quiz-start-page">Is it a Shoujo?</h1>
      </header>
      <main className="main-part">
        <QuizLogic />
      </main>
      <Footer />
    </div>
  );
}

export default Quiz;