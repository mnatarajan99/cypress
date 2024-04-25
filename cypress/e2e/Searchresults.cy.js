import url from '../utils/global'

describe('test' ,()=>{
    it('Auto suggestion dropdown in search location ',()=>{
    cy.visit(url.url.stagingurl).click
    cy.get('#input_0').type('700078')
    cy.wait(6000)
    cy.get('button').contains('Check').click()
    cy.get('.srch-header-input').type('Soapex Classic Bar 75 gm').should('be.visible')
    cy.get('.srch-btn').click()
    cy.get('div.srch-rht>h3').contains('Soapex Classic Bar 75 gm').click()

})
})
