const httpLib = require('supertest');
const severAPI = httpLib('http://localhost:443/v1');

function createUser(data) {
    return severAPI
        .post('/users')
        .set('Authorization', 1234)
        .send(data);
}

function getUser(userName) {
    return severAPI
        .post(`/users?name=${userName}`)
        .set('Authorization', 1234)
}

function UpdateUser(data) {
    return severAPI
        .put('/users')
        .set('Authorization', 1234)
        .send(data);
}

module.exports ={
    createUser,
    getUser,
    UpdateUser
}