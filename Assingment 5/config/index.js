module.exports = {
    PORT: process.env.PORT,
    mongodb: require('./mongoose')
}


module.exports = {
    PORT: process.env.PORT,
    db: {
        users: [{
            email: 'mubashara.samo22@gmail.com',
            firstName: 'Mubashara',
            lastName: 'Razak',
         delete: false

        }]
    },
    mongodb: require('./mongoose')
}