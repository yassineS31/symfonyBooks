describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:8000/category/new')
      cy.get('#category_label').type('123')
      cy.get('.btn').click().wait(1000);
      // Verification de redirection
      cy.get('h1').contains('Category index');
      cy.get(':nth-child(10) > :nth-child(2)').contains('1234');
      
    })
  })

