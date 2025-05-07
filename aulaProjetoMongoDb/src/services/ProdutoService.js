import { ProdutoRepository } from "../repositories/ProdutoRepository";

export const ProdutoService = {
    async criarProduto(dto){
        if(dto.preco < 0) throw new Error("Preço negativo não permitido");
        return ProdutoRepository.criar(dto);
    },
    async listarProdutos(){
        return ProdutoRepository.listarTodos();
    },
    async obterProduto(id){
        const p = await ProdutoRepository.buscarPorId(id);
        if(!p) throw new Error("Produto não existe");
        return p;
    },
    async atualizarProduto(id, dto){
        return ProdutoRepository.atualizar(id, dto);
    },
    async removerProduto(id){
        const p = await ProdutoRepository.deletar(id);
        if(!p) throw new Error("Produto não existe");
        return p;
    }
}