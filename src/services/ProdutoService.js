import api from './api'

export async function buscarProdutosAtivos() {
  const response = await api.get('/produtos/ativos')
  return response.data
}

export async function listarTodos() {
  const response = await api.get('/produtos')
  return response.data
}

export async function criarProduto(produto) {
  const response = await api.post('/produtos', produto)
  return response.data
}

export async function atualizarProduto(id, produto) {
  const response = await api.put(`/produtos/${id}`, produto)
  return response.data
}

export async function inativarProduto(id) {
  const response = await api.patch(`/produtos/${id}/inativar`)
  return response.data
}

export async function excluirProduto(id) {
  await api.delete(`/produtos/${id}`)
}

export async function reativarProduto(id) {
  const response = await api.patch(`/produtos/${id}/reativar`)
  return response.data
}