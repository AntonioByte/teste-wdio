
class LoginPage {
    //Seletores 
    get menuLogin() { return $('~Login') }
    get campoEmail() { return $('~input-email') }
    get campoSenha() { return $('~input-password') }
    get botaoLogin() { return $('~button-LOGIN') }
    async mensagemErro(texto) { return $(`//android.widget.TextView[@text="${texto}"]`) }
    get mensagemSucesso() { return $('id=android:id/message') }
    get botaoOK() { return $('id=android:id/button1') }

    //Ações
    async acessarMenuLogin() {
        await this.menuLogin.click();
    }

    async preencherCampos(email, senha) {
        await this.campoSenha.clearValue(); 
        await this.campoEmail.clearValue();

        if (email) {
            await this.campoEmail.setValue(email);
        }
        if (senha) {
            await this.campoSenha.setValue(senha); 
            
            
        }
        await this.botaoLogin.click();
    }

    async obterMensagemSucesso() {
        //await this.mensagemSucesso.waitForDisplayed({ timeout: 5000 });
        return this.mensagemSucesso.getText();
    }

    async validarMensagemErro(texto) {
        expect(await this.mensagemErro(texto)).toHaveText(texto);
    }
    
}
export default new LoginPage();
