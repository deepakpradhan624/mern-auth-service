
import response from "supertest";
import app from "./src/app";


describe("App", ()=>{
    test("should return 200 status",async()=>{
const response= await response(app).get("/").send();
expect(response.statusCode).toBe(200)
    })
})