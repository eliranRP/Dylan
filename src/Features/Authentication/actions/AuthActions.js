
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGN_USER,
    SIGN_USER_SUCCESS,
    SIGN_USER_FAIL
} from '../types';
import AuthRepository from '../../../Repository/AuthRepository'


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

export const signIn = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGN_USER });
        AuthRepository.signIn(email, password)
            .then(user => {
                debugger
                dispatch({ type: SIGN_USER_SUCCESS, payload: user });
            })
            .catch(error => {
                debugger
                dispatch({ type: SIGN_USER_FAIL })
            });
    }
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        AuthRepository.login(email, password)
            .then(user => {
                dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
            })
            .catch(error => { dispatch({ type: LOGIN_USER_FAIL }) });
    };
};

