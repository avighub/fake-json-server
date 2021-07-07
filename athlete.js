var faker = require('faker')
function generateAthletes() {
    var athletes = []
    for (var id = 0; id < 50; id++) {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var email = faker.internet.email()
        athletes.push({
            "id": id,
            "first_name": firstName,
            "last_name": lastName,
            "email": email
        })
    }
    return { "athletes": athletes }
}
module.exports = generateAthletes