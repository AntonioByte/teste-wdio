class dragPage{
//Elementos
get menuDrag() { return $('~Drag') }
get pecaCabeca() { return '~drag-c1' }
get pecaCorpo() { return '~drag-c2' }    
get pecaPernas() { return '~drag-c3' }   
get pecaOrelhaDir() { return '~drag-r1' }
get pecaBracoDir() { return '~drag-r2' }
get pecaPeDir() { return '~drag-r3' }
get pecaOrelhaEsq() { return '~drag-l1' }
get pecaBracoEsq() { return '~drag-l2' }
get pecaPeEsq() { return '~drag-l3' }
async mensagem(texto) { return $(`//android.widget.TextView[@text="${texto}"]`) }


//Métodos

async acessarMenu() {
    await this.menuDrag.click();
}


async arrastarPeca(peca) {
    
    // 1. Pega o seletor ou ID do elemento atual (ex: "~drag-c1")
    const seletorOrigem = $(peca); 
    // 2. Substitui o 'drag' por 'drop' no texto do seletor (ex: vira "~drop-c1")
    const seletorDestino = peca.replace('drag', 'drop');
    // 3. Busca o elemento de destino real na tela usando o novo seletor
    const elementoDestino = await $(seletorDestino);
    // 4. Passa o objeto do elemento destino para o dragAndDrop
    await seletorOrigem.dragAndDrop(elementoDestino);
        
}    

async verificarMensagem(texto) {
    const elementoMensagem = await this.mensagem(texto);
    expect(elementoMensagem).toBeDisplayed(); 
}



}
export default new dragPage();