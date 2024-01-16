import { User } from '../domain/model/user'
import userDB from '../domain/data-access/user.db'

const getAllUsers = async (): Promise<User[]> => userDB.getAllUsers()

export default { 
    getAllUsers 
}
