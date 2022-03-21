import { Request, Response } from 'express';
class CreateUserController{
    handle(request: Request, response: Response){

        const nome = request.body.nome;

        if(nome.length === 0){
            return response.status(400).json({mensagem: 'Infrome o nome de um usuário'})
        }

        return response.status(200).json({mensagem: `Usuario ${nome} criado com sucesso`}) 
    }
    
}

export { CreateUserController }