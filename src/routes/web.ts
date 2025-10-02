import express, {Express} from "express";

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get("/", (req, res) => {
        res.send("Hello world nodemon");
    })

    router.get("/", (req, res) => {
        res.render("home.ejs");
    })

    router.get("/info", (req, res) => {
        res.send("Ngo Nhut Hao");
    })

    app.use("/", router);
}

export default webRoutes;
