import api from "./api";

export async function buscarProdutosAtivos() {
    const response = await api.get("/produtos/ativos");
    return response.data;
}