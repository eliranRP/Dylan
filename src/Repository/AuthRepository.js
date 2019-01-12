import AuthApi from '../Api/Authentication/AuthenticationApi'
import UserController from '../db/UserController';

export default AuthRepository = {
    authenticate: () => {
;
    },
    login: (email, password) => login(email, password),
    logout:  () =>  AuthApi.logout(),
    signIn: (email, password) => signIn(email, password),
    signInOrLogin: (email, password) => signInOrLogin(email, password),
}

const signInOrLogin = (email, password) => {
    return login(email, password)
        .catch(e => {
            return signIn(email, password)
        })
}

const signIn = (email, password) => {
    return AuthApi.signIn(email, password)
        .then(({ user }) => {
            return UserController.create(user)//Create user in firebase
        });
}

const login = (email, password) => {
    return AuthApi.login(email, password)
}
