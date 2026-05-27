import dragPage from "../pageobjects/drag.page";
describe('Teste da tela DragDrop', () => {

    before(async () => {
        await dragPage.acessarMenu();
        await driver.pause(1000);
    });

    it('Deve montar o quebra-cabeça completo com DragAndDrop', async () => {

        await dragPage.arrastarPeca(dragPage.pecaCabeca);
        await dragPage.arrastarPeca(dragPage.pecaCorpo);
        await dragPage.arrastarPeca(dragPage.pecaPernas);
        await dragPage.arrastarPeca(dragPage.pecaOrelhaDir);
        await dragPage.arrastarPeca(dragPage.pecaBracoDir);
        await dragPage.arrastarPeca(dragPage.pecaPeDir);
        await dragPage.arrastarPeca(dragPage.pecaOrelhaEsq);
        await dragPage.arrastarPeca(dragPage.pecaBracoEsq);
        await dragPage.arrastarPeca(dragPage.pecaPeEsq);

        await dragPage.verificarMensagem('Congratulations');

        await driver.pause(2000);
    });
});