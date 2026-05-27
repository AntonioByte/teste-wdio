class swipePage {
    //seletores
    get menuSwipe() { return $('~Swipe') }
    get telaSwipe() { return $('~Swipe-screen') }
    async elementoTexto(texto) { return $(`//android.widget.TextView[@text="${texto}"]`) }
    get carousel() { return $('//android.view.ViewGroup[@resource-id="Carousel"]') }//$('//android.widget.ScrollView')
    //$("-android uiautomator:new UiSelector().className(\"android.view.ViewGroup\").instance(9)")


    //métodos

    async acessarMenu() {
        this.menuSwipe.waitForExist({ timeout: 5000 });
        this.menuSwipe.click();
    }

    async retornarTelaSwipe() {
        return await this.telaSwipe
    }

    async retornarCarrossel() {
        return await this.carousel
    }

    async executarSwipeView(direction, maxScrolls, percent, scrollableElement, texto) {
        const elemento = await this.elementoTexto(texto);

        await elemento.scrollIntoView({
            direction: direction,
            maxScrolls: maxScrolls,
            percent: percent,
            scrollableElement: scrollableElement
        });
    };

    async executarSwipe(direction, duration, percent, scrollableElement) {
        await browser.swipe({
            direction: direction,
            duration: duration,
            percent: percent,
            scrollableElement: scrollableElement
        });
    }

    async verificarTextoVisivel(texto) {
        const elemento = await this.elementoTexto(texto);
        expect(elemento).toBeDisplayedInViewport();
    }






}

export default new swipePage();