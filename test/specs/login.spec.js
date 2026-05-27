
import loginPage from "../pageobjects/login.page";
describe('Funcionalidade: Login', () => {

    before(async () => {
        await loginPage.acessarMenuLogin();
    });

    afterEach(async () => {
        await driver.relaunchActiveApp();
    });

    it('Deve fazer login com sucesso', async () => {
        await loginPage.preencherCampos('user@example.com', 'password123');
        expect(await loginPage.obterMensagemSucesso()).toEqual('You are logged in!');
        await loginPage.botaoOK.click();
        //await driver.acceptAlert()
    });

    it('Deve mostrar mensagem de erro ao inserir email inválido', async () => {
        await loginPage.preencherCampos('userexample.com', 'password123');
        await loginPage.validarMensagemErro('Please enter a valid email address');
    });

    it('Deve mostrar mensagem de erro ao inserir senha inválida', async () => {
        await loginPage.preencherCampos('user@example.com', 'word123');
        await loginPage.validarMensagemErro('Please enter at least 8 characters');
    });
    
    it('Deve mostrar mensagem de erro ao não inserir senha', async () => {
        await loginPage.preencherCampos('user@example.com', '');
        await loginPage.validarMensagemErro('Please enter at least 8 characters');
    });

    it.only('Deve mostrar mensagem de erro ao não inserir e-mail', async () => {
        await loginPage.preencherCampos('', 'password123');
        await loginPage.validarMensagemErro('Please enter a valid email address');
        //await driver.pause(5000)
    });

});