describe('Afficher la liste des éditeur vide', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:8000/editor')
      cy.get('[href="/editor/new"]').click();
      cy.get('.table > tbody > tr > :nth-child(2)').then(($list)=>{
      let values = $list.toArray().map(text => text.innerText);
      let value= new Set(values);
      if(values.length>value.size){
        throw new Error('Erreur, il n\'y a pas encore d\'éditeur');
      }
    });
    })

})