import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import HomeTitle from './HomeTitle';

function Home() {
  return (
    <div>
      <header className="header-title">
        <NavBar />
        <h1><HomeTitle /></h1>
      </header>
      <main className="main-part">
        <h2>What is Shoujo?</h2>
        <p>
          A demographic of anime and manga. What does that mean? Simply it means young girl. This would mean in the marketing they push it to young girls (ages 8 - 19), but what it doesn&apos;t mean is that these stories are
          {' '}
          <em>ONLY</em>
          {' '}
          for girls. It can be seen that nothing about the content of an anime or manga is predetermined from the word Shoujo, but Shoujo is often seen as only being for girls, only have a girl as the main character or just being about romance.
        </p>

        <p>
          Shoujo gets forced into the
          {' '}
          <em>Slice of Life</em>
          {' '}
          and
          {' '}
          <em>Romance</em>
          {' '}
          GENRES as being the end of be all of those. Nothing else is Shoujo and if it is Shoujo it will be one of those, but that just isn&apos;t true.
          Shoujo again is a demographic, mean the genres within in it are just as vast as in the other demographics.
          Yes, Shoujo contains slice of life and romance stories but it also has fantasy, horror, action, mystery and so much more, because Shoujo isn&apos;t the genre and it doesn&apos;t encompass one genre.
        </p>

        <h2>What&apos;s with the site?</h2>
        <p>Use the skills you have to share the information you know. At the core that is it, to make an impact on even one person getting into anime or manga to try anything they find even if someone told them the demographic means something else. </p>

        <p>
          I love and enjoy manga and anime, and while I think every can expand I do think that I&apos;ve been pretty diverse in the genres and demographic that I enjoy or give a try. When getting into the various anime and manga I enjoy, I noticed that Shoujo and Josei
          {' '}
          <em>(the 2 demographics geared towards women/girls)</em>
          {' '}
          were often getting downplayed or missed entirely for their male counter parts. I wasn&apos;t finding any more duds than I would in the Shounen/Seinin content I was seeing. So what was with the brushing off of these two.
        </p>

        <p>
          Shoujo can&apos;t be put into a box as one thing because it seems a bit different than those use to Shounen(marketed to young boys demographic) are use to,
          because it pushes a narrative that doesn&apos;t allow any on the demographics or the genres within them to flourish as they are meant too.
          Demographics are just an umbrella that house so many different stories and when we try to shove stories in those demographics into boxes that don&apos;t allow for the growth and showing of all they have it stunts the possibilities of all demographics.
        </p>

        <p>
          On this site there is a quiz that is solely there for fun and to help remind anyone that takes it that you literally can&apos;t judge a book by the cover and can you determine if based on the summary is the anime/manga a Shoujo.
          Check it out and maybe take notes on any that sound interesting and give them a try!
        </p>

        {/* Button has to be on the inside for the css styling of a button to actually apply but this allows the button to work lke a link would and not refresh the page based on react-router */}
        <Link to="/quiz" className="func-button"><button type="button" data-testid="to-quiz-page">Head to the quiz!</button></Link>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
