export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-copy">
          <div className="header-kicker">VINICIUS.PORTFOLIO</div>
          <h1>Vinicius Marques</h1>
          <div className="header-subtitle">Engenheiro de Dados</div>
          <p className="header-description">
            Pipelines confiáveis, modelagem clara e entregas com foco em dados, cloud e automação. Uma presença visual mais viva, inspirada em natureza, pixel art e tecnologia.
          </p>
          <nav className="header-nav" aria-label="Navegação principal">
            <button type="button" onClick={() => scrollToSection('sobre')} className="btn btn-secondary">
              Sobre
            </button>
            <button type="button" onClick={() => scrollToSection('habilidades')} className="btn btn-secondary">
              Habilidades
            </button>
            <button type="button" onClick={() => scrollToSection('projetos')} className="btn btn-secondary">
              Projetos
            </button>
            <button type="button" onClick={() => scrollToSection('contato')} className="btn">
              Contato
            </button>
          </nav>
        </div>

        <div className="header-visual" aria-hidden="true">
          <span className="hero-cloud one" />
          <span className="hero-cloud two" />
          <span className="hero-kite" />
          <div className="hero-data-orb">
            dados
            <span>SQL / Fabric / Azure</span>
          </div>
          <div className="hero-mascot" />
        </div>
      </div>
    </header>
  );
}