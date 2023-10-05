describe('Página de Carrinho', () => {
    it('Selecionar os itens do carrinho, clicar em gerar o orçamento', () => {
      cy.visit('http://127.0.0.1:5500/frontend/carrinho/')
      cy.get('[type="checkbox"]').check();
      cy.wait(1500);
      cy.contains('a', 'Gerar Orçamento').click();
      cy.wait(1500);

    
    })
  })