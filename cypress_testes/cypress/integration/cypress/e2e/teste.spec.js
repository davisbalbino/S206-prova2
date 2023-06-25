/// <referance types= "cypress"/>

describe("Criando cenario de teste do site do Inatel", ()=>{


    it("Caso de teste: aceitando cookie e LGPD", ()=>{
     
      let info = Inatel()
    })
    
    it("Caso de teste: Acessando o Quem somos", ()=>{
      
      let info = Inatel()
      let info2 = ConhecaOInatel()
    })
    it("Caso de teste: Acessando a página de", ()=>{
      
      let info = Inatel()
      let info2 = infraestrutura()
    })

    function Inatel(){
      cy.visit("https://inatel.br/home/")
      cy.get('#contract-1 > .policyMessage > .actionUser > .acceptCookie').click() //Apertando o botão do cookie
      cy.get('.modal-footer > .btn').click()
      cy.get('#educacao > div.flexBoxGeral.flexTS > h2').should("contain.text", "Educação")
      return
    }
    
    function ConhecaOInatel(){
      cy.get('#contactar').click()
      cy.get('#sp-pagebuilder > div > div > div > div > div.wrap1396.wrapBgWhite.wrapBRadius > div > div > div:nth-child(1) > h4').should("contain.text", "Missão")
    }

    function infraestrutura(){
      cy.visit('https://inatel.br/home/infraestrutura')
      cy.get('#nossoTime > div > div:nth-child(1) > div:nth-child(1) > picture > img').click()
      cy.get('#sp-pagebuilder > div > div > div > div > div.playerVideo.playerOpen > div').should("contain.text", "Fechar")
    }
    })
    