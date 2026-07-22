import "./PlatformBanner.css";

function PlatformBanner() {
  const plataformas = [
    { nome: 'Mercado Livre', logo: '/logos/mercado-livre.png', ativo: true },
    // Quando tiver mais plataformas, é só adicionar aqui:
    // { nome: 'Amazon', logo: '/logos/amazon.png', ativo: true },
  ]

  return (
    <section className="platform-banner">
      <h2>Compre com confiança, direto na plataforma</h2>
      <div className="plataformas-lista">
        {plataformas.map((plataforma) => (
          <div key={plataforma.nome} className="plataforma-item">
            <img src={plataforma.logo} alt={plataforma.nome} />
            <span>{plataforma.nome}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PlatformBanner