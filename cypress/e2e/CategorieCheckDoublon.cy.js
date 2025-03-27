describe("Vérifier qu'il n'y a pas de doublons dans le nom des catégories", () => {
    it('passes', () => {
      cy.visit('https://127.0.0.1:8000/category/')
      // Verification de redirection
      cy.get('h1').contains('Category index');
      // Selection de la ligne correspondante
      cy.get('.table > tbody > tr > td:nth-child(2)').then(($list)=>{
        let values = $list.toArray().map(text => text.innerText);
        let value= new Set(values);
        if(values.length>value.size){
          throw new Error('Erreur, la valeur existe déjà');
        }
          cy.log('Enregistrement réussi !')
        
      });

    })
  })

