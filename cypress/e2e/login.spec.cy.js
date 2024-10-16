describe('cheking the login functionality', ()=>{
    it('passes',()=> {
        cy.visit('http://localhost:5173/login');
    })
    ,
    it('checking if the input is written', ()=>{
        cy.visit('http://localhost:5173/login');
        cy.get('[data-cy="email"]').should('exist').type('bouhamidi.sal@gmail.com');
        cy.get('[name="password"]').should('exist').type('Test12345')
        cy.get('button').contains('Sign in').click();
    })
    it('redirect to the register  page',()=>{
        cy.visit('http://localhost:5173/login')
        cy.get('[data-cy-register="register"]').should('exist').click();
        cy.url().should('eq','http://localhost:5173/register');

    })
    it('redirect to the reset password page', ()=>{
        cy.visit('http://localhost:5173/login')

        cy.get('[data-cy-forgetpassword="forgetpassword"]').should('exist').click();

        cy.url().should('eq', 'http://localhost:5173/forgetPassword');
    })
    
  })