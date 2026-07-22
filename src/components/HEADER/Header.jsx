import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">LinkHub</div>
      <nav>
        <a href="#inicio">Início</a>
        <a href="#produtos">Produtos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  )
}

export default Header