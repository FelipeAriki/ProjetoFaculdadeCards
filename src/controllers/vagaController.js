import vagasDAL from "../dal/vagasDAL.js";

const dal = new vagasDAL()

export default class vagaController {
    obterVagas(req, res){
        dal.obterVagas(res);
    }
    obterVagasPorCargo(req, res){
        dal.obterVagasPorCargo(req, res);
    }
    cadastrarVaga(req, res){
        dal.cadastrarVaga(req, res);
    }
}