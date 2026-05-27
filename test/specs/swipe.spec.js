import swipePage from "../pageobjects/swipe.page";
describe('Deve realizar swipe', () => {
    let tela = null;
    let carrossel = null;

    before(async () => {
        
        await swipePage.acessarMenu();
        tela = await swipePage.retornarTelaSwipe();
        await tela.waitForExist({ timeout: 5000 });
        carrossel = await swipePage.retornarCarrossel();
    });

    it('Deve arrastar para baixo', async () => {
        let texto = 'You found me!!!';

        //OBSERVAÇÃO: O swipe estava arrastando janela do app e não rolava a tela, mesmo usando os parametros não resolveu, então optei por usar o scrollIntoView para rolar a tela até o elemento desejado, e depois verificar se ele esta visível.
        await swipePage.executarSwipeView('up', 5, 0.85, tela, texto);
        await swipePage.verificarTextoVisivel(texto);
    });

    it('Deve arrastar para cima', async () => {
        
        let texto = 'Swipe horizontal';

        await swipePage.executarSwipe('down', 2000, 0.95, tela);
        await swipePage.verificarTextoVisivel(texto);
    
    });

    it('Deve arrastar para a esquerda', async () => {
        let texto = 'COMPATIBLE';
        await swipePage.executarSwipeView('left', 10, 0.85, carrossel, texto);
        await swipePage.verificarTextoVisivel(texto);
    });

    it('Deve arrastar para a direita', async () => {
        await swipePage.executarSwipe('left', 2000, 0.85, carrossel);
        await swipePage.executarSwipe('right', 2000, 0.85, carrossel);
    });
    

});