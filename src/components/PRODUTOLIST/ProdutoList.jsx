import './ProdutoList.css'
import { useState, useEffect } from "react";
import { buscarProdutosAtivos } from "../../services/produtoService";


function ProdutosList() {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        async function carregarProdutos() {
            try {
                const produtos = await buscarProdutosAtivos();

                setProdutos(produtos);
            } catch (error) {
                setErro("Erro ao buscar produtos.");
                console.error(error);
            } finally {
                setCarregando(false);
            }
        }

        carregarProdutos();
    }, []);

    return (
        <section id="produtos" className="produtos">
             <div className="container"></div>
            <h2>Produtos em destaque</h2>

            {carregando && <p>Carregando produtos...</p>}

            {erro && <p>{erro}</p>}

            <div className="produtos-grid">
                {produtos.map((produto) => (
                    <div key={produto.id} className="produto-card">

                        <img
                            src={produto.imagem}
                            alt={produto.nome}
                        />

                        <h3>{produto.nome}</h3>

                        <p>{produto.descricao}</p>

                        <p className="preco">
                            {produto.preco.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </p>

                        <a
                            href={produto.linkAfiliado}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver oferta
                        </a>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProdutosList;