import { Request, Response } from "express";
import { handleCreateUser } from "../services/user.service";

const getHomePage = (req: Request, res: Response) => {
    return res.render("home.ejs");
}

const getCreateUser = (req: Request, res: Response) => {
    return res.render('create-user.ejs');
}

const postCreateUser = (req: Request, res: Response) => {
    //object destructuring
    const { name, email, address } = req.body;
    
    //handle create user
    handleCreateUser(name, email, address);

    return res.redirect('/');
}
export { getHomePage, getCreateUser, postCreateUser };