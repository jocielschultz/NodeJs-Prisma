import prismaClient from "../../prisma";

class ClienteService {
  async create(
    nomeCompleto: string,
    sexo: string,
    dataNascimento: Date,
    cidade_id: string
  ) {
    const cliente = await prismaClient.cliente.create({
      data: {
        nomeCompleto,
        sexo,
        dataNascimento,
        cidade_id,
      },
      include: {
        cidade: true,
      },
    });

    return cliente;
  }

  async findAll() {
    const clientes = await prismaClient.cliente.findMany({
      include: {
        cidade: true,
      },
    });

    return clientes;
  }

  async findById(id: string) {
    const cliente = await prismaClient.cliente.findFirst({
      where: {
        id,
      },
      include: {
        cidade: true,
      },
    });

    return cliente;
  }

  async findByNome(nome: string) {
    const cliente = await prismaClient.cliente.findMany({
      where: {
        nomeCompleto: {
          contains: nome,
        },
      },
      include: {
        cidade: true,
      },
    });

    return cliente;
  }

  async update(
    id: string,
    nomeCompleto: string,
    sexo: string,
    dataNascimento: Date,
    cidade_id: string
  ) {
    const cliente = await prismaClient.cliente.update({
      where: {
        id,
      },
      data: {
        nomeCompleto,
        sexo,
        dataNascimento,
        cidade_id,
      },
    });
    return cliente;
  }

  async delete(id: string) {
    const cliente = await prismaClient.cliente.delete({
      where: {
        id,
      },
    });

    return cliente;
  }
}

export { ClienteService };
