describe('Créer une nouvelle catégorie puis changer son nom', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:8000/editor')
      cy.find('a').contains('Create new')
    })

  })

