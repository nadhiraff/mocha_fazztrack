const chai = require('chai');
chai.use(require('chai-json-schema'));
const expect = require('chai').expect;
const apiUnderTest = require('../api/api_swagger');
const dataTest = require('../data/data_test_swagger');
const { testcases } = require('../testcases/tc_api_swagger.js');
const jsonDataTest = require('../file/payload_createuser.json');
// const schemaResponse = require('../schema/response_getUser_swagger_schema');
const { before } = require('mocha');

describe(testcases.description, async() => {
    let userid = '';
    before(async () => {
        const response = await apiUnderTest.createUser(jsonDataTest);
        userid = response.body.id;

        // const selectedData = response.body.data.filter(data => data.id === 'e4bbdb3b-92c0-4664-b78e-afaea8628774');
        // userid = selectedData;
    });
    it(testcases.positive.case1, async() => {
        const data = jsonDataTest;
        data.id = userid;
        data.nationality ='malaysia';
        data.occupation = 'tester';
        console.log(data);

        const response = await apiUnderTest.UpdateUser(data);

        console.log(response.body);
        // //assertion
        expect(response.statusCode).to.equal(200);
        expect(response.body.occupation).to.equal(data.occupation);
        expect(response.body).to.be.jsonSchema(data);  
    });

    it(testcases.negative.case1, async() => {
        const data = jsonDataTest;
        data.age = 0;
        
        const response = await apiUnderTest.UpdateUser(data);

        console.log(response.body);

        // assertion
        expect(response.statusCode).to.equal(400);
        expect(response.body).to.be.jsonSchema(data); 
        expect(response.body.errorCode).to.equal('ER-03');
    });

    it(testcases.negative.case2, async() => {
        const data = jsonDataTest;
        data.hobbies = [];
        const response = await apiUnderTest.UpdateUser(data);

        console.log(response.body);
        
        // assertion
        expect(response.status).to.equal(400);
        expect(response.body).to.be.jsonSchema(data); 
        expect(response.body.errorCode).to.equal('ER-03');
    });


    it(testcases.negative.case3, async() => {
        const data = dataTest.UpdateUserNull();
        const response = await apiUnderTest.UpdateUser(data);

        console.log(response.body);
        
        // assertion
        expect(response.status).to.equal(404);
        expect(response.body).to.be.jsonSchema(data); 
        expect(response.body.errorCode).to.equal('ER-01');
    });
});