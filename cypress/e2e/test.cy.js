describe('test spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/#');
    
    cy.get('.top__logo').should('be.visible')
    cy.get('.top__title').should('be.visible')
    cy.get('.booking-info__heading').should('have.text', 'When, WHAT & Who');
  });
  
  it('should be able to fill out input fields and add shoes', () => {
    cy.get('.input__field').eq(0).type('1994-04-03').should('have.value', '1994-04-03');
    cy.get('.input__field').eq(1).type('18:00').should('have.value', '18:00');
    cy.get('.input__field').eq(2).type('1').should('have.value', '1');
    cy.get('.input__field').eq(3).type('2').should('have.value', '2');
    cy.get('.shoes__button').first().click();
     cy.wait(1000);
    cy.get('.shoes__button--small').first().click();
     cy.wait(1000);
    cy.get('.shoes__button').first().click();
     cy.wait(1000);
    cy.get('.shoes__input').type('42');
     cy.wait(1000);
    cy.get('.booking__button').click();
    cy.wait(2000);
    cy.get('.confirmation__button').click();
  });

  it('should be able to navigate between the views', () => {
    cy.get('.navigation__icon').click().should('be.visible');
    cy.wait(1000);
    cy.get('.navigation__link').eq(1).click();
     cy.wait(1000);
    cy.get('.navigation__icon').click();
     cy.wait(1000);
     cy.get('.navigation__link').eq(0).click();
  });



  afterEach(() => {
    cy.wait(2000);
  });

});