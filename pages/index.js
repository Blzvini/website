import Head from 'next/head';
import Header from '../components/Header';
import FloatingNav from '../components/FloatingNav';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WelcomeModal from '../components/WelcomeModal';

export default function Home({ theme, toggleTheme }) {
  return (
    <>
      <Head>
        <title>Vinicius Marques | Engenheiro de Dados</title>
        <meta
          name="description"
          content="Portfólio pessoal de Vinicius Marques — Engenheiro de Dados com identidade pixel art, foco em pipelines, modelagem e cloud."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={theme === 'dark' ? '#0c1528' : '#2d9b4e'} />
        <meta property="og:title" content="Vinicius Marques | Engenheiro de Dados" />
        <meta property="og:description" content="Portfólio visualmente refinado, com foco em dados, cloud e identidade autoral." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

      <WelcomeModal />
      <FloatingNav theme={theme} toggleTheme={toggleTheme} />

      <main id="main">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
