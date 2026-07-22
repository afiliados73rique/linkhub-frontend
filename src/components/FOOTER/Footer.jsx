import "./Footer.css";

function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="footer-logo">LinkHub</div>
      <p>LinkHub conecta você aos melhores produtos com praticidade e confiança.</p>

      <div className="footer-links">
        <div>
          <h4>Navegação</h4>
          <a href="#inicio">Início</a>
          <a href="#produtos">Produtos</a>
        </div>
        <div>
          <h4>Contato</h4>
          <p>seuemail@exemplo.com</p>
        </div>
      </div>

      <p className="footer-copy">© 2026 LinkHub. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer