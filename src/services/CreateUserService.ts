interface IUsuario {
    nome: string,
    email: string
}
class CreateUserService {
    execute({ nome, email}: IUsuario){
        const data = []; // simulando conexão com o banco de dados

        data.push({nome, email});

        return data;
    }
}

export { CreateUserService }