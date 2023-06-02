describe('test spec', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/#');
      
      cy.get('.top__logo').should('be.visible')
      cy.get('.top__title').should('be.visible')
      cy.get('.booking-info__heading').should('have.text', 'When, WHAT & Who');
    });
    
    it('should show an error if one or more of input fields are not filled out', () => {
        cy.get('.input__field').eq(0).type('2023-03-30').should('have.value', '2023-03-30');
        cy.get('.booking__button').click();
        cy.get('.error-message').should('be.visible');
      });

        
    it('should show an error if shoes are not selected', () => {
        cy.get('.input__field').eq(0).type('1994-04-03').should('have.value', '1994-04-03');
        cy.get('.input__field').eq(1).type('18:00').should('have.value', '18:00');
        cy.get('.input__field').eq(2).type('1').should('have.value', '1');
        cy.get('.input__field').eq(3).type('2').should('have.value', '2');
        cy.get('.booking__button').click();
        cy.get('.error-message').should('be.visible');
      });
  
    afterEach(() => {
      cy.wait(2000);
    });
  
  });