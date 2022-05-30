///<reference types="cypress" />
// In this test , I have automated the Home page to create account page . 
// In create account , the fields like First name , lastname , Password and Email Id are parameterised . 


//Test case 1 , visits the  pearson Home page and clicks on signIn button 
describe('Pearson Home Page to create New Account ', () => {

    it('Open pearson Home page', () => {
        cy.visit('https://www.pearson.com/en-gb.html')
        cy.title().should('eq', 'Create new possibilities with Pearson. Start learning today.')
        cy.contains('Pearson')

    })
    it('Click on signIn button', () => {
        cy.get('.userNav__button > span').click()
        cy.url().should('include', 'login')
        cy.get(':nth-child(3) > .optanon-alert-box-bg > .optanon-alert-box-button-container > .optanon-button-allow > .optanon-alert-box-button-middle > .optanon-allow-all').click({ force: true })
    })

    // Test Case 2
    // Create new Account has been Parameterised to fetch the new values every time it runs the script .

    it('create New account', () => {

        cy.get('#firstName').should('be.visible').type('Test' + firstName())
        function firstName() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 8; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }

        cy.get('#lastName').should('be.visible').type('TestlastName')

        cy.get('#emailID').should('be.visible')
            .type(userID_Alpha() + '@gmail.com')
        function userID_Alpha() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 8; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }

        cy.get('#passwordID').should('be.visible').type('Test' + password())
        function password() {

            let text = Math.random().toString(36);
            return text
        }

        cy.get('#acceptTermsOfUse').should('have.value', 'true').check({ force: true })
        cy.get('button').contains('Create account').click({ force: true })
        //cy.get(':nth-child(3) > .optanon-alert-box-bg > .optanon-alert-box-button-container > .optanon-button-allow > .optanon-alert-box-button-middle > .optanon-allow-all').click({ force: true })
        cy.get('.optanon-alert-box-bg').within(() => {
       
            return cy.contains('Button','Accept cookies').click({force:true})
    })
})

    //Test case 3 : Navigate to Educators Link 
    it('Navigate to Educators Link', () => {

        cy.get('a').contains('Educators').click({force: true})
        cy.url().should('include','uk')
        cy.get('a').contains('Educators').click({force:true})
        cy.title().should('eq','Educators | Pearson UK')
       cy.get('a').contains('School educators').click({force:true})
       cy.url().should('include','educators/schools.html')
       cy.get('.optanon-alert-box-bg').within(() => {
       
        return cy.contains('Button','Accept cookies').click({force:true})
      })
    })
        


})



