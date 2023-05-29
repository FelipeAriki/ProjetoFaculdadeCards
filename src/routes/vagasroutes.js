import express from 'express';
import VagaController from '../controllers/vagaController.js';

const cctr = new VagaController()

const croutes = express.Router();

croutes.get("/vagas/obterVagas", cctr.obterVagas);
croutes.get("/vagas/obterVagasPorCargo", cctr.obterVagasPorCargo);

export default croutes