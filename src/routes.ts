import { Router } from "express";
import { CidadeController } from "./controllers/Cidade/CidadeController";
import { ClienteController } from "./controllers/Cliente/ClienteController";

const router = Router();

router.post("/cidades", new CidadeController().create);
router.post("/clientes", new ClienteController().create);

router.get("/cidade/:nome", new CidadeController().findByNome);
router.get("/cidadesPorEstado/:estado", new CidadeController().findByEstado);

router.get("/clientes", new ClienteController().findAll);
router.get("/cliente/:id", new ClienteController().findById);
router.get("/clientesPorNome/:nome", new ClienteController().findByName);

router.put("/clientes/:id", new ClienteController().update);
router.delete("/clientes/:id", new ClienteController().delete);

export { router };
