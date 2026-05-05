export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container">
        <h1>Vinicius Marques</h1>
        <div className="header-subtitle">Engenheiro de Dados</div>
        <p className="header-description">
          Especialista em pipelines de dados, ETL, SQL e arquiteturas robustas com foco em Microsoft Fabric e Azure Data Lake.
        </p>
        <nav className="header-nav">
          <button onClick={() => scrollToSection('sobre')} className="btn btn-secondary">
            Sobre
          </button>
          <button onClick={() => scrollToSection('habilidades')} className="btn btn-secondary">
            Habilidades
          </button>
          <button onClick={() => scrollToSection('projetos')} className="btn btn-secondary">
            Projetos
          </button>
          <button onClick={() => scrollToSection('contato')} className="btn">
            Contato
          </button>
        </nav>
      </div>
    </header>
  );
}