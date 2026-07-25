import "./PlatformBanner.css";

function PlatformBanner() {
 const plataformas = [
  {
    nome: "",
    logo: "/mercadofree.png",
    url: "https://www.mercadolivre.com.br",
  },
];
    // Futuramente:
    // {
    //   nome: "Amazon",
    //   logo: "/logos/amazon.png",
    // },
  

  return (
   <section className="platform-banner">
  <div className="container">
      <h2>Compre com confiança, direto na plataforma</h2>

      <p>
        Você será direcionado para a loja oficial, onde sua compra é protegida
        e garantida.
      </p>

      <div className="plataformas-lista">
        {plataformas.map((plataforma) => (
         <a
  key={plataforma.nome}
  href={plataforma.url}
  target="_blank"
  rel="noopener noreferrer"
  className="plataforma-botao"
>
            <img
              src={plataforma.logo}
              alt={plataforma.nome}
            />

            <span>{plataforma.nome}</span>
          </a>
        ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformBanner;