export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="container">
        <span className="section-eyebrow">// trajetória</span>
        <h2 className="section-title">Sobre Mim</h2>

        <div className="about-content">
          <div className="about-grid">
            <div>
              <p>
                Sou Engenheiro de Dados apaixonado por transformar informação em estrutura, clareza e resultado. Meu trabalho combina ETL, SQL, PySpark, Microsoft Fabric e Azure para construir soluções confiáveis e escaláveis.
              </p>

              <p>
                Busco oportunidades como Engenheiro de Dados Jr., com interesse em ambientes modernos de dados, produtos analíticos e soluções com identidade técnica forte.
              </p>
            </div>

            <div className="about-facts">
              <div className="fact-card">
                <span className="fact-label">Foco atual</span>
                <div className="fact-value">Dados, cloud e automação</div>
              </div>
              <div className="fact-card">
                <span className="fact-label">Ferramentas-chave</span>
                <div className="fact-value">Fabric, Azure, SQL, Git</div>
              </div>
              <div className="fact-card">
                <span className="fact-label">Personalidade visual</span>
                <div className="fact-value">Pixel art, natureza e calma</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}