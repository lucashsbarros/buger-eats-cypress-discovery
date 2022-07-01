var faker = require ('faker')
var cpf = require ("gerador-validador-cpf")

export default {

    deliver: function(){

      var firstName = faker.name.firstName()
      var lastName = faker.name.lastName()


        var data = {
        name: `${firstName} ${lastName}`,
        cpf:cpf.generate(),
        email: faker.internet.email(firstName),
        whatsapp: "11944445555",
        address: {
            postalcode: "14090283",
            street: "Rua Guarujá",
            number: "830",
            details: "Apto 13",
            district: "Jardim Paulistano",
            city_state: "Ribeirão Preto/SP"

        },
        delivery_method: "Moto",
        cnh: "cnh-digital.jpg"
        }
        
        return data

    }
}
