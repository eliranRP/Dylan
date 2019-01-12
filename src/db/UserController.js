import firebase from "firebase"
import User from '../Model/User'
import { AsyncStorage } from "react-native"

const USER = 'user'
// Get a reference to the database service
// var db = firebase.database().ref(USER);
export default UserController = {
    create: async (firebaseUser) => {
        User.email = firebaseUser.email
        User.id = firebaseUser.uid

        return firebase.database().ref(USER).child(User.id)
            .set(User)
    },
    update: async (user) => {
        return firebase.database().ref(USER).child(user.id)
            .update(user)
    },


}
