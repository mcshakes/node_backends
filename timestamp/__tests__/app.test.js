const buildFastify = require('../server');
const supertest = require('supertest')

describe("GET / ", () => {

    test("responds with success on request /", async (done) => {
        const app = buildFastify

        const response = await app.inject({
            method: 'GET',
            url: '/'
        });

        expect(response.statusCode).toBe(200);
        expect(response.payload).toBe('{"hello":"world"}');
        done();
    });    
});


describe("GET /api/timestamp/:date", () => {

    beforeEach(() => {
        jest.useFakeTimers()
    })
    
    test("responds with Date.now() when request is empty", async (done) => {
        const app = buildFastify

        // const literallyJustDateNow = () => Date.now();

        // const realDateNow = Date.now.bind(global.Date);
        // const dateNowStub = jest.fn(() => 1530518207007);

        // // Date.now() = 1607459753579
        // let shit = literallyJustDateNow()

        // console.log("literallyJustDateNow", shit)
        // console.log("dateNowStub", dateNowStub)
        // console.log("realDateNow", realDateNow)

        // expect(literallyJustDateNow()).toBe(1530518207007);
        // expect(dateNowStub).toHaveBeenCalled();


        const response = await app.inject({
            method: 'GET',
            url: '/api/timestamp/'
        });

        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
        // expect(response.payload).toEqual(`{"utc":"Tue, 08 Dec 2020 20:17:42 GMT","unix":${realDateNow}}`)

        // global.Date.now = realDateNow;
        done();
    });    
})