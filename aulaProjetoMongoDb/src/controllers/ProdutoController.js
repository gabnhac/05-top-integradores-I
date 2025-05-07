import { ProdutoService } from "../services/ProdutoService";

export const ProdutoController = {
    async criar(req, res, next){
        try {
            const criado = await ProdutoService.criarProduto(req.body);
            res.status(201).json(criado);
        } catch (error) {
            next(error);
        }
    }, 
    async listar(req, res, next){
        try {
            const lista = await ProdutoService.listarProdutos();
            res.json(lista);
        } catch (error) {
            next(error);
        }
    },
    async obter(req, res, next){
        try {
            const p = await ProdutoService.obterProduto(req.params.id);
            res.json(p);
        } catch (error) {
            next(error);
        }
    },
    async atualizar(req, res, next){
        try {
            const update = await ProdutoService.atualizarProduto(req.params.id, res.body);
            res.json(update);
        } catch (error) {
            next(error);
        }
    },
    async deletar(req, res,next){
        try {
            const p = await ProdutoService.removerProduto(req.params.id);
            res.status(204).end();
        } catch (error) {
            next(error);
        }
    }
}