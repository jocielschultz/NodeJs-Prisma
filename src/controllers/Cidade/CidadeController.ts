import { Request, Response } from "express";
import { CidadeService } from "../../services/Cidade/CidadeService";

class CidadeController {
  async create(request: Request, response: Response) {
    const { nome, estado } = request.body;

    const service = new CidadeService();

    const result = await service.create(nome, estado);
    return response.json(result);
  }

  async findByNome(request: Request, response: Response) {
    const { nome } = request.params;

    const service = new CidadeService();

    const result = await service.findByNome(nome);
    return response.json(result);
  }

  async findByEstado(request: Request, response: Response) {
    const { estado } = request.params;

    const service = new CidadeService();

    const result = await service.findByEstado(estado);
    return response.json(result);
  }
}

export { CidadeController };
