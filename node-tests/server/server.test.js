const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;


/*    .expect({
       error: 'Page not found.'
   }) */


// make a new test
// assert 200
//assert that you exist in users array

// server
// get / 
// some test case


//get /users
//some test case
describe('Server', () => {
    describe('GET /', () => {
        it(' should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })


                .end(done);
        });


    });

});

describe('Get /users', () => {
    it('should return name and age', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'can',
                    age: 22
                });
            })
            .end(done);
    });

})