import "./Footer.css";

function Footer() {
  return (
    <footer id="contato" className="footer">
       <div className="container footer-inner"></div>
      <div className="footer-logo">LinkHub</div>
      <p>Selecionamos produtos de qualidade para que você encontre as melhores opções em um só lugar.</p>

      <div className="footer-links">
        <div>
          <h4>Navegação</h4>
          <a href="#inicio">Início</a>
          <a href="#produtos">Produtos</a>
        </div>
        <div>
          <h4>Contato</h4>
          <p>afiliados.73rique@gmail.com</p>
        </div>
      </div>

      <p className="footer-copy">© 2026 LinkHub. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer