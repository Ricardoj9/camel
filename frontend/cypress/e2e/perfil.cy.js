describe('Página de Perfil', () => {
    it('Inserir CEP, rua, número, complemento, bairro, cidade, uf, telefone e clicar em salvar', () => {
      cy.visit('http://127.0.0.1:5500/frontend/perfil/')
      cy.get('#cep').type('55036-050');
      cy.wait(1500);
      cy.get('#rua').type('Jose Victor de Albuquerque');
      cy.wait(1500);
      cy.get('#numero').type('123');
      cy.wait(1500);
      cy.get('#complemento').type('Casa');
      cy.wait(1500);
      cy.get('#bairro').type('Kennedy');
      cy.wait(1500);
      cy.get('#cidade').type('Caruaru');
      cy.wait(1500);
      cy.get('#uf').type('PE');
      cy.wait(1500);
      cy.get('#telefone').type('8199999999');
      cy.wait(1500);
      cy.contains('button', 'Salvar').click();
    })
  })