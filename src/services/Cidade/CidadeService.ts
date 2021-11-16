import prismaClient from "../../prisma";

class CidadeService {
  async create(nome: string, estado: string) {
    try {
      const cidade = await prismaClient.cidade.create({
        data: {
          nome,
          estado,
        },
      });

      return cidade;
    } catch (err) {
      return err.message;
    }
  }

  async findById(id: string) {
    try {
      const cidade = await prismaClient.cidade.findFirst({
        where: {
          id,
        },
      });

      return cidade;
    } catch (err) {
      return err.message;
    }
  }

  async findByNome(nome: string) {
    try {
      const cidade = await prismaClient.cidade.findMany({
        where: {
          nome,
        },
      });

      return cidade;
    } catch (err) {
      return err.message;
    }
  }

  async findByEstado(estado: string) {
    try {
      const cidade = await prismaClient.cidade.findMany({
        where: {
          estado,
        },
      });

      return cidade;
    } catch (err) {
      return err.message;
    }
  }
}

export { CidadeService };
