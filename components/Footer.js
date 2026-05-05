export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <span>VINICIUS.PORTFOLIO</span>
          <p>&copy; {new Date().getFullYear()} Vinicius Marques. Dados, natureza e tecnologia em equilíbrio.</p>
        </div>
      </div>
    </footer>
  );
}