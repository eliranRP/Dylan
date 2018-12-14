import * as firebase from "firebase"
export default User = {
    id: '',
    name: '',
    email: '',
    profileImage: '',
    timestamp: firebase.database.ServerValue.TIMESTAMP
}