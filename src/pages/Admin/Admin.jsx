import { useState, useEffect } from 'react'
import { listarTodos, inativarProduto, reativarProduto, excluirProduto } from '../../services/produtoService'
import FormularioProduto from '../../components/FormularioProduto/FormularioProduto'
import './Admin.css'

function Admin() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [produtoEditando, setProdutoEditando] = useState(null) // null = form fechado
  const [mostrarForm, setMostrarForm] = useState(false)

  async function carregarProdutos() {
    setCarregando(true)
    const dados = await listarTodos()
    setProdutos(dados)
    setCarregando(false)
  }

  useEffect(() => {
    carregarProdutos()
  }, [])

  async function handleToggleStatus(produto) {
  const acao = produto.ofertaAtiva ? 'inativar' : 'reativar'
  if (!confirm(`Tem certeza que deseja ${acao} esse produto?`)) return

  if (produto.ofertaAtiva) {
    await inativarProduto(produto.id)
  } else {
    await reativarProduto(produto.id)
  }
  carregarProdutos()
}

  async function handleExcluir(id) {
    if (!confirm('Tem certeza? Essa ação não pode ser desfeita.')) return
    await excluirProduto(id)
    carregarProdutos()
  }

  function abrirNovoProduto() {
    setProdutoEditando(null) // sem produto = modo "criar"
    setMostrarForm(true)
  }

  function abrirEdicao(produto) {
    setProdutoEditando(produto) // com produto = modo "editar"
    setMostrarForm(true)
  }

  function fecharForm() {
    setMostrarForm(false)
    carregarProdutos() // atualiza a lista depois de fechar (caso algo tenha mudado)
  }

  if (carregando) return <p className="admin-carregando">Carregando produtos...</p>

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Gerenciar Produtos</h1>
        <button className="btn-novo" onClick={abrirNovoProduto}>
          + Novo Produto
        </button>
      </div>

      <table className="admin-tabela">
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
      <tbody>
  {produtos.map((produto) => (
    <tr key={produto.id}>
      <td data-label="Imagem">
        <img src={produto.imagem} alt={produto.nome} className="admin-thumb" />
      </td>
      <td data-label="Nome">{produto.nome}</td>
      <td data-label="Preço">
        {produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </td>
      <td data-label="Status">
        <span className={produto.ofertaAtiva ? 'status-ativo' : 'status-inativo'}>
          {produto.ofertaAtiva ? 'Ativo' : 'Inativo'}
        </span>
      </td>
      <td data-label="Ações" className="admin-acoes">
        <button onClick={() => abrirEdicao(produto)}>Editar</button>
        <button onClick={() => handleToggleStatus(produto)}>
          {produto.ofertaAtiva ? 'Inativar' : 'Reativar'}
        </button>
        <button className="btn-excluir" onClick={() => handleExcluir(produto.id)}>
          Excluir
        </button>
      </td>
    </tr>
  ))}
</tbody>
      </table>

      {mostrarForm && (
        <FormularioProduto produto={produtoEditando} aoFechar={fecharForm} />
      )}
    </div>
  )
}

export default Admin