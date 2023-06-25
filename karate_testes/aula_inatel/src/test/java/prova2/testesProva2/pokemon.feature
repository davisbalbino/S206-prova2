Feature:
Testes com a API de Pokemon para a Prova2

Background: Executa antes de cada teste
    * def url_base = "https://pokeapi.co/api/v2/pokemon/"

Scenario: verifica se tem retorno 
    Given url url_base
    And path 'ditto'
    When method get
    Then status 200

Scenario: verifica se tem retorno de um pokemon inexistente
    Given url url_base
    And path 'Namo'
    When method get
    Then status 200

Scenario: verifica se tem retorno quando usa o method head 
    Given url url_base
    And path 'ditto'
    When method head
    Then status 200

Scenario: verifica se ele está no jogo da versão red
    Given url url_base
    And path 'ditto'
    When method head
    Then status 200

Scenario: verifica se ele está no jogo da versão red
    Given url url_base
    And path 'ditto'
    When method get
    And match response.game_indices[0].version.name == "red"

Scenario: verifica se experiencia base é de 101
    Given url url_base
    And path 'ditto'
    When method get
    And match response.base_experience == 101





