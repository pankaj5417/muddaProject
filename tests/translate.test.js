const request = require("supertest");
const express = require("express");
const app = express();

const translateController = require('../src/controllers/translate.controller2');

//body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//mount routers
app.use("/", translateController );


describe("Test GET/test1", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get('/test1');
        expect(response.statusCode).toBe(200);
    });
});

describe("Test GET/test2", () => {
    test("It should response the GET method", done => {
        request(app)
            .get("/test2")
            .query({
                sourceText: 'My name is pk!',
                targetLanguage: 'ta'
            })
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});
