describe('Página de Criar Conta', () => {
    it('Inserir email, nome, senha, confirmação de senha e clicar em cadastrar', () => {
      cy.visit('http://127.0.0.1:5500/frontend/login/')
      cy.contains('a', 'Registre-se').click();
      cy.get('[name="email"]').type('junior@junior.com');
      cy.wait(1500);
      cy.get('[name="name"]').type('ricardo');
      cy.wait(1500);
      cy.get('[name="password"]').type('123');
      cy.wait(1500);
      cy.get('[name="confirmPassword"]').type('123');
      cy.wait(1500);
      cy.contains('a', 'Cadastrar').click();
    })
  })