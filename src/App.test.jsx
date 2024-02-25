import {render, screen} from '@testing-library/react'
import App from './App'
describe("Exemplo de aplicação de teste em react vite", ()=>{
   
    // Você pode fazer múltiplos testes
    test('Verifica se a tela login possui  o titulo "Login"',() =>{
        render(<App/>)  // monta uma dom virtual para  realizar os testes
        const tituloLogin = screen.getByRole('heading')  // busca na tela  um elemento que contenha o texto Login
        expect(tituloLogin.innerHTML).toMatch("Login");   
    })
    // Teste para  verificar se um elemento existe na DOM
    test('Verifica se a tela de Login possui um input de email', ()=>{
        render(<App />);   // é necessário chamar novamente o render pois o componente não
        const inputEmail = screen.getByLabelText("Email:");   //pegando o label do html que é igual ao texto
        expect(inputEmail).toBeInTheDocument();         //verificando se ele está presente na
    })
    //Repete teste para senha
    test("Verifica se a tela de Login possui um input de senha", ()=>{
        render(<App/>)
        const  inputSenha = screen.getByLabelText("Senha:")  //seleciona e pega o campo que possui o label senha
        expect(inputSenha).toBeInTheDocument( );     //
    })
})
