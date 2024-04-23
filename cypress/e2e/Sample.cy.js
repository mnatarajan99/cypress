describe('test' ,()=>{
    xit('VerifyURL',()=>{
        cy.visit("https://emami-web-staging.mobinius.net/")
        cy.url().should("include","staging").and('not.contain.html','Moni')
        cy.title().should("include","emami")

    })
})
it('Login',()=>{
    cy.visit("https://emami-web-staging.mobinius.net/").click
    //cy.get('.ng-pristine > .md-raised')
    
    cy.contains("Login to choose address").click()
cy.get("input[name='userDetails']").type("9500772740").should("have.value", "9500772740")
cy.get(".login-btn").then(($button) => {
    if ($button.is(':enabled')) {
        cy.get(".login-btn").click()
    } else {
        cy.log("Login button is not enabled")
    }
})
})
