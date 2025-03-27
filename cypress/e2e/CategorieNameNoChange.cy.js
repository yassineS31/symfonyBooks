describe('Créer une nouvelle catégorie puis changer son nom ', () => {
    it('passes', () => {
      cy.visit('https://127.0.0.1:8000/category/new')
      // Selection de l'input et inscription du nom de la catégorie
      cy.get('#category_label').type('SCI FI');
      // Validation
      cy.get('.btn').click().wait(1000);
      // Verification de redirection
      cy.get('h1').contains('Category index');
      // Selection de la ligne correspondante
      cy.get('.table > tbody > tr').last().contains('SCI FI');
    // Click sur le bouton d'édition de la catégorie
      cy.get('.table > tbody > tr').last().contains('edit').click();
      // Vider le champs de "SCI FI"
      cy.get('#category_label').clear();
      // Modification du nom de la catégorie précédemment crée
      cy.get('#category_label').type('Roman');
      // Validation
      cy.get('[name="category"] > .btn').click();
      // Vérification des modification
      cy.get('.table > tbody > :nth-child(2) > :nth-child(2)').contains('Roman');

    })
  })

