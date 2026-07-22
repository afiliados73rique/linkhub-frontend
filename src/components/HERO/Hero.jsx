import "./Hero.css";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-texto">
        <h1>Os melhores produtos, com o <span className="destaque">melhor preço</span></h1>
        <p>Selecionamos ofertas imperdíveis para você economizar.</p>
      </div>
      <img src="/hero.png" alt="Produtos em destaque" className="hero-imagem" />
    </section>
  )
}

export default Hero