import { useState } from 'react'
import { criarProduto, atualizarProduto } from '../../services/ProdutoService'
import './FormularioProduto.css'

function FormularioProduto({ produto, aoFechar }) {
  const ehEdicao = produto !== null

  const [form, setForm] = useState({
    nome: produto?.nome || '',
    descricao: produto?.descricao || '',
    preco: produto?.preco || '',
    imagem: produto?.imagem || '',
    linkAfiliado: produto?.linkAfiliado || '',
    ofertaAtiva: produto?.ofertaAtiva ?? true,
  })
  const [salvando, setSalvando] = useState(false)
  const [erro, setErro] = useState('')

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSalvando(true)
    setErro('')

    try {
      const dados = { ...form, preco: parseFloat(form.preco) }

      if (ehEdicao) {
        await atualizarProduto(produto.id, dados)
      } else {
        await criarProduto(dados)
      }

      aoFechar()
    } catch (error) {
      setErro('Erro ao salvar produto. Confira os campos.')
    } finally {
      setSalvando(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={aoFechar}>
      <form className="modal-form" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        <h2>{ehEdicao ? 'Editar Produto' : 'Novo Produto'}</h2>

        <label>Nome</label>
        <input name="nome" value={form.nome} onChange={handleChange} required />

        <label>Descrição</label>
        <textarea name="descricao" value={form.descricao} onChange={handleChange} required />

        <label>Preço</label>
        <input
          type="number"
          step="0.01"
          name="preco"
          value={form.preco}
          onChange={handleChange}
          required
        />

        <label>Imagem (URL)</label>
        <input name="imagem" value={form.imagem} onChange={handleChange} required />

        <label>Link de Afiliado</label>
        <input name="linkAfiliado" value={form.linkAfiliado} onChange={handleChange} required />

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="ofertaAtiva"
            checked={form.ofertaAtiva}
            onChange={handleChange}
          />
          Oferta ativa
        </label>

        {erro && <p className="form-erro">{erro}</p>}

        <div className="modal-botoes">
          <button type="button" onClick={aoFechar}>Cancelar</button>
          <button type="submit" disabled={salvando}>
            {salvando ? 'Salvando...' : 'Salvar'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormularioProduto