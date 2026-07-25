import "./Hero.css";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-inner">
      <div className="hero-texto">
        <h1>Os melhores produtos, com o <span className="destaque">melhor preço</span></h1>
        <p>Selecionamos ofertas imperdíveis para você economizar.</p>
      </div>
      <div className="hero-imagem-container">
  <img src="/herooficial.png" alt="Produtos em destaque" className="hero-imagem" />
</div>
</div>
    </section>
  )
}

export default Hero