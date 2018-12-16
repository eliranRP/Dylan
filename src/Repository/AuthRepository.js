import AuthApi from '../Api/Authentication/AuthenticationApi'
import UserController from '../db/UserController'

export default AuthRepository = {
    login: (email, password) => {
        return AuthApi.login(email, password)
    },
    logout: () => {
        return AuthApi.logout()
    },
    signIn: async (email, password) => {
        let {user} = await AuthApi.signIn(email, password);
        return UserController.create(user)//Create user in firebase
    }
}

