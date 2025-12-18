import { log } from "console"
import { handleCreateUser } from "../services/user.service"

const getHomePage = (req, res) => {
    return res.render('home.ejs')
}

const getCreateUser = (req, res) => {
    return res.render('user-create.ejs')
}

const postCreateUser = (req, res) => {
    const {fullName, email, address} = req.body
    log('req.body',req.body)
    handleCreateUser(fullName, email, address)
    //xử lý dữ liệu từ form
    return res.redirect('/')
}

export { getHomePage, getCreateUser, postCreateUser };