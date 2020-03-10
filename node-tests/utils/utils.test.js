const expect = require('expect');

const utils = require('./utils');
describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);


            //toBe is for a result toBeA isfor a type  
            expect(res).toBe(44).toBeA('number');
            /*     if (res !== 44) {
                    throw new Error(`expected 44, but got ${res} `);
                } */
        });
    })


    it('should take a square ', () => {
        var res = utils.square(2);

        expect(res).toBe(4).toBeA('number');
        /*  if (res !== 4) { //scope
             throw new Error(`Expected 4 , but got ${res} `);
         } */
    });

    // write (done() for async code
    it('should async add two numbers ', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    it('should async square the x', (done) => {
        utils.asyncSquare(3, (result) => {
            expect(result).toBe(9).toBeA('number');
            done();
        });
    });
})

// should verify first and last name are set
//assert it includes firstname and last name with proper values
it('should set f and lastname ', () => {

    var user = {
        location: 'izmir',
        age: 22
    };
    var res = utils.setName(user, 'Can Baran');
    // expect(user).toEqual(res);

    expect(res).toInclude({
        firstName: 'Can',
        lastName: 'Baran'
    });
});




// it('should expect some values', () => {
//     //  expect(12).toNotBe(12);
//     /*  expect({name: 'can-baran'}).toNotEqual({name: 'Can-baran'); */
//     //expect([2, 3, 4]).toInclude(5);  or to Exclude
//     expect({
//         name: 'CanBaran',
//         age: 22,
//         location: 'izmir'
//     }).toExclude({
//         age: 23
//     })
// })