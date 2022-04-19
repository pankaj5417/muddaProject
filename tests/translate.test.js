const request = require("supertest");
const express = require("express");
const app = express();

const translateRoutes = require('../src/controllers/translate.controller');

//body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//mount routers
app.use("/", translateRoutes );


describe("Test the /test1 path", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get('/test1');
        expect(response.statusCode).toBe(200);
    });
});

describe("Test /test2 path", () => {
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
