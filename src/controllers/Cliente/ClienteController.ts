import { Request, Response } from "express";
import { ClienteService } from "../../services/Cliente/ClienteService";

class ClienteController {
  async create(request: Request, response: Response) {
    const { nomeCompleto, sexo, dataNascimento, cidade_id } = request.body;

    const service = new ClienteService();

    try {
      const result = await service.create(
        nomeCompleto,
        sexo,
        dataNascimento,
        cidade_id
      );
      return response.json(result);
    } catch (error) {
      //console.log(error.message);
      return response.json({ error: true, message: "erro ao criar cliente" });
    }
  }

  async findAll(request: Request, response: Response) {
    const service = new ClienteService();

    try {
      const result = await service.findAll();
      return response.json(result);
    } catch (error) {
      return response.json({ error: true, message: "erro ao buscar clientes" });
    }
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;
    const service = new ClienteService();

    try {
      const result = await service.findById(id);
      return response.json(result);
    } catch (error) {
      return response.json({
        error: true,
        message: "erro ao buscar clientes pelo id",
      });
    }
  }

  async findByName(request: Request, response: Response) {
    const { nome } = request.params;
    const service = new ClienteService();

    try {
      const result = await service.findByNome(nome);
      return response.json(result);
    } catch (error) {
      return response.json({
        error: true,
        message: "erro ao buscar clientes pelo nome",
      });
    }
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { nomeCompleto, sexo, dataNascimento, cidade_id } = request.body;

    const service = new ClienteService();

    try {
      const result = await service.update(
        id,
        nomeCompleto,
        sexo,
        dataNascimento,
        cidade_id
      );
      return response.json(result);
    } catch (error) {
      return response.json({ error: true, message: "erro ao alterar cliente" });
    }
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const service = new ClienteService();

    try {
      const result = await service.delete(id);
      return response.json(result);
    } catch (error) {
      return response.json({ error: true, message: "erro ao excluir cliente" });
    }
  }
}

export { ClienteController };
