
describe ('Pruebas de validacion pagina de inicio', function (){
    beforeEach(() => {
        // runs before each test in the block
        cy.visit("https://opensource-demo.orangehrmlive.com/")

      })


    it ('Validacion de logo superior', function (){
      cy.get('.orangehrm-login-branding > img').should('be.visible') 
    })

  it ('Validacion campo username existe', function (){
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper').should('be.visible')
  })
  it ('Validacion del texto del footer', function (){
    cy.get(':nth-child(2) > a').contains('OrangeHRM')
  })
  it ('Validacion del boton login es visible', function (){
    cy.get('.oxd-button').should('be.visible')
  })
       
})

    
describe ('Pruebas de validacion funcion adicionar usuario', function (){
   
  it.only('Prueba E2E para adicionar un usuario', function (){
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').debug().type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.oxd-autocomplete-text-input > input').type("L")
    cy.get('.oxd-autocomplete-dropdown > :nth-child(3)').click()
    //generacion de un numero aleatorio para crear siempre un usuario distinto y omitir validacion de duplicados
    let rndnum = Math.random() *2;
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("jose234")
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("Alex--1234")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Alex--1234")
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
    cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-toast-content').should('contain.text','Successfully Saved')
  })

     
})