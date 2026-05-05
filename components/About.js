export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>

        <div className="about-content">
          <div className="about-grid">
            <div>
              <p>
                Sou Vinicius Marques, Engenheiro de Dados formado em Tecnologia da Informação. Nasci curioso — o tipo de pessoa que abre o terminal antes de abrir o manual. Comecei minha trajetória em desenvolvimento, passei por QA e hoje vivo no mundo dos dados: pipelines, modelagem, cloud e tudo que envolve transformar informação bruta em algo que realmente importa.
              </p>

              <p style={{ marginTop: '1rem' }}>
                Trabalho com PySpark, SQL, Microsoft Fabric e Azure para construir soluções robustas e escaláveis. Gosto de ambientes onde a engenharia tem identidade — onde cada decisão técnica tem intenção por trás. Estou em busca de uma oportunidade como Engenheiro de Dados Jr. em times que valorizem qualidade, autonomia e aprendizado contínuo.
              </p>

              <p style={{ marginTop: '1rem' }}>
                Fora do trabalho, você me encontra explorando trilhas, ouvindo música (de jazz a metal, sem preconceito), jogando games indie com estética retrô, lendo sobre tecnologia ou assistindo séries até tarde. Acredito que pessoas com interesses variados constroem soluções mais criativas — e essa é a aposta que faço em mim mesmo todo dia.
              </p>
            </div>

            <div className="about-facts">
              <div className="fact-card">
                <span className="fact-label">Formação</span>
                <div className="fact-value">Tecnologia da Informação</div>
              </div>
              <div className="fact-card">
                <span className="fact-label">Foco atual</span>
                <div className="fact-value">Engenharia de Dados Jr.</div>
              </div>
              <div className="fact-card">
                <span className="fact-label">Stack principal</span>
                <div className="fact-value">Fabric · Azure · PySpark · SQL</div>
              </div>
              <div className="fact-card">
                <span className="fact-label">Fora do código</span>
                <div className="fact-value">Trilhas · Games · Música · Séries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}