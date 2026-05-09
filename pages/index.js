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

const GITHUB_REPOS = ['whats-in-the-neighborhood', 'website'];

function formatRepoName(name) {
  return name.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export async function getStaticProps() {
  const headers = {
    Accept: 'application/vnd.github+json',
    ...(process.env.GITHUB_TOKEN && {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    }),
  };

  try {
    const githubProjects = await Promise.all(
      GITHUB_REPOS.map(async (repo) => {
        const [repoRes, langsRes] = await Promise.all([
          fetch(`https://api.github.com/repos/Blzvini/${repo}`, { headers }),
          fetch(`https://api.github.com/repos/Blzvini/${repo}/languages`, { headers }),
        ]);
        const data = await repoRes.json();
        const langs = await langsRes.json();
        const topLangs = Object.keys(langs).slice(0, 3);
        const stack = [...new Set([...topLangs, ...(data.topics || [])])].slice(0, 5);
        return {
          id: repo,
          title: formatRepoName(data.name),
          description: data.description || '',
          stack,
          link: data.html_url,
          stars: data.stargazers_count,
        };
      })
    );
    return { props: { githubProjects }, revalidate: 3600 };
  } catch {
    return { props: { githubProjects: [] }, revalidate: 60 };
  }
}

export default function Home({ theme, toggleTheme, githubProjects }) {
  const themeColor =
    theme === 'dark'  ? '#0c1528' :
    '#2d9b4e';

  return (
    <>
      <Head>
        <title>Vinicius Marques | Engenheiro de Dados</title>
        <meta
          name="description"
          content="Portfólio pessoal de Vinicius Marques — Engenheiro de Dados com identidade pixel art, foco em pipelines, modelagem e cloud."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={themeColor} />
        <meta property="og:title" content="Vinicius Marques | Engenheiro de Dados" />
        <meta property="og:description" content="Portfólio visualmente refinado, com foco em dados, cloud e identidade autoral." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

      <WelcomeModal theme={theme} />
      <FloatingNav theme={theme} toggleTheme={toggleTheme} />

      <main id="main">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <About />
        <Experiences />
        <Skills />
        <Projects githubProjects={githubProjects} />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
