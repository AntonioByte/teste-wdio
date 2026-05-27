import formPage from "../pageobjects/form.page";
    //https://webdriver.io/docs/api/mobile/swipe/
describe('Funcionalidade: Tela de formulário', () => {

    before(async () => {
        formPage.acessarMenu();
    });

    it('Deve preencher o campo de texto', async () => {
        let texto = 'Teste de Automação'; 
        await formPage.preencherCampoTexto(texto);
        expect(await formPage.obterTextoResultado()).toEqual(texto);
    });

    it('Deve clicar no botão On/Off e verificar o texto', async () => {
        let textoInicial = await formPage.obterTextoSwitch();
        await formPage.clicarBotaoOnOff();
        expect(await formPage.obterTextoSwitch()).not.toEqual(textoInicial);
    });

    it('Deve selecionar uma opção do dropdown e verificar a seleção', async () => {
        let opcao = 'webdriver.io is awesome';
        await formPage.selecionarDropdown(opcao);
        expect(await formPage.textoDropdownSelecionado()).toEqual(opcao);
    });
});