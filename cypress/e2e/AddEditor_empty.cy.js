describe('Créer une nouvelle catégorie puis changer son nom', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:8000/editor')
      cy.get('[href="/editor/new"]').click();
      cy.get('#editor_name');
      if(cy.get('#editor_name')==''){
        throw new console.error('Le champs est vide ! ');
      }
      cy.get('.btn').click();
      cy.log('Enregistrement réussi !');
    });
    })

