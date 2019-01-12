
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    SIGN_USER,
    SIGN_USER_SUCCESS,
    SIGN_USER_FAIL,
    USER_LOGGED_OUT
} from '../types';
import AuthRepository from '../../../Repository/AuthRepository'
import { Actions } from 'react-native-router-flux';
import firebase from "firebase"



export const onAuthChange = () => {
    return (dispatch) => {
        dispatch({ type: SIGN_USER });
        return firebase.auth().onAuthStateChanged((user) => {
            console.log(user)
            if (user) {
                Actions.main({ user })
                dispatch({ type: SIGN_USER_SUCCESS, payload: user });
            } else {
                dispatch({ type: USER_LOGGED_OUT, payload: user });
            }
        })
    }

}


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const signInOrLogin = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGN_USER });
        AuthRepository.signInOrLogin(email, password)
            .then(user => {
                Actions.main({ user })
                dispatch({ type: SIGN_USER_SUCCESS, payload: user });
            })
            .catch(error => {
                dispatch({ type: SIGN_USER_FAIL, payload: error.message })
            });
    }
}
