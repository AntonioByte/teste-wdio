class FormPage {

    // Elementos da página de formulários
    get menuForms() { return $("~Forms") }
    get campoTexto() { return $("~text-input") }
    get labelResultado() { return $("~input-text-result") }
    get botaoOnOff() { return $("~switch") }
    get switchTexto() { return $("~switch-text") }
    async opcaoDropdown(opcao) { return $(`-android uiautomator:new UiSelector().text("${opcao}")`) }
    get dropdown() { return $('//android.widget.EditText[@resource-id="text_input"]') }

    // Ações
    async acessarMenu() {
        await this.menuForms.click();
    }

    async preencherCampoTexto(texto) {
        await this.campoTexto.setValue(texto);
    }

    async obterTextoResultado() {
        return await this.labelResultado.getText();
    }

    async clicarBotaoOnOff() {
        await this.botaoOnOff.click();
    }

    async obterTextoSwitch() {
        return await this.switchTexto.getText();
    }

    async selecionarDropdown(opcao) {
        let elemento = await this.opcaoDropdown(opcao);
        await this.dropdown.click();
        await elemento.click();
    }

    async textoDropdownSelecionado() {
        return await this.dropdown.getText();
    }


}

export default new FormPage();