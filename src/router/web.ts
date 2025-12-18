import express, {Express} from 'express'
const router = express.Router()
import { getHomePage, getCreateUser, postCreateUser } from '../controller/user-controller'

const webRouter = (app: Express) => {

    router.get('/',getHomePage )

    router.get('/create-user', getCreateUser)

    router.post('/handle-create-user', postCreateUser)

    app.use('/', router);
} 


export default webRouter;
