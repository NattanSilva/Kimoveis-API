import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import { mockedAdmin, mockedAdminLogin} from "../../mocks"


describe("/login", () => {
    let connection: DataSource

    beforeAll(async() => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Error during Data Source initialization", err)
        })

        await request(app).post('/users').send(mockedAdmin)
    })

    afterAll(async() => {
        await connection.destroy()
    })

    test("POST /login -  should be able to login with the user",async () => {
        const response = await request(app).post("/login").send(mockedAdminLogin);
        
        expect(response.body).toHaveProperty("token")
        expect(response.status).toBe(200)
     
    })

    test("POST /login -  should not be able to login with the user with incorrect password or email",async () => {
        const response = await request(app).post("/login").send({
            email: "felipe@mail.com",
            password: "1234567"
        });

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(403)
             
    })

    test("POST /login -  should not be able to login with the user with isActive = false",async () => {
        const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        const findUser= await request(app).get('/users').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
        await request(app).delete(`/users/${findUser.body[0].id}`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
        const response = await request(app).post("/login").send(mockedAdminLogin);
        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(400)
             
    })

   

})