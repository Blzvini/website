import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vinicius Marques | Engenheiro de Dados</title>
        <meta name="description" content="Portfólio profissional de Engenheiro de Dados especializado em ETL, SQL, PySpark e Microsoft Fabric. Experiência em pipelines de dados e arquitetura em Azure." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0f62fe" />
        <meta property="og:title" content="Vinicius Marques | Engenheiro de Dados" />
        <meta property="og:description" content="Portfólio profissional de Engenheiro de Dados especializado em ETL, SQL e Microsoft Fabric" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}