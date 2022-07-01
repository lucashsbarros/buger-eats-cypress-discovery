import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
//import { it } from 'faker/lib/locales'
import SignupPage from '../pages/SignupPage'


describe('Cadastro', () => {

    //beforeEach(function (){
    //   cy.fixture('deliver').then((d)=> {
    //       this.deliver = d
    //   })

    //})
    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()
        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()
        deliver.cpf = '000000141aa'
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorrect email', function () {

        var deliver = signupFactory.deliver()
        deliver.email = 'user.com.br'
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function () {

        const messages = [
            { filed: 'name', output: 'É necessário informar o nome' },
            { filed: 'cpf', output: 'É necessário informar o CPF' },
            { filed: 'email', output: 'É necessário informar o email' },
            { filed: 'postalcode', output: 'É necessário informar o CEP' },
            { filed: 'number', output: 'É necessário informar o número do endereço' },
            { filed: 'deliver_method', output: 'Selecione o método de entrega' },
            { filed: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]
        before(function(){
            SignupPage.go()
            SignupPage.submit()
        })
        messages.forEach(function(msg){
            it(`${msg.filed} is required`, function(){
                SignupPage.alertMessageShouldBe(msg.output)
            })
        })
    })


})

