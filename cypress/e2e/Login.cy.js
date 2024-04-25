
import url from '../utils/global'

describe('test' ,()=>{
    it.skip('VerifyURL',()=>{
        cy.visit(url.url.stagingurl)
        cy.url().should("include","staging")
        cy.title().should("include","online")

    })
})

it('Login',()=>{
    cy.visit(url.url.stagingurl).click
    //cy.get('.ng-pristine > .md-raised')
    
    cy.contains("Login to choose address").click()
    cy.get("input[name='userDetails']").type("9500772740").should("have.value", "9500772740")
    cy.get(".login-btn > .md-raised").then(($button) => {
        if ($button.is(':enabled')) {
            cy.wait(1000)
            cy.get(".login-btn > .md-raised").click()
        } else {
            cy.log("Login button is not enabled")
        }
    cy.get("input[name='OTP']").type("1234").should("have.length","1")
    cy.contains("Continue").then(($continuebutton) => {
            if($continuebutton.is(':enabled')){
                cy.contains("Continue").click()
            }else {
                cy.log("fail to login ")
            }

            })

    })

})



