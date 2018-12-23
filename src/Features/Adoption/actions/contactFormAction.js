
import { FORM_CHECKBOX_UPDATE ,CONTACT_NAME_CHANGE,CONTACT_PHONE_CHANGE} from '../types'

export const checkboxUpdated = ({ prop, value }) => {
    return {
        type: FORM_CHECKBOX_UPDATE,
        payload: { prop, value }
    };
};

export const contactNameChanged = (name) => {
    return {
        type: CONTACT_NAME_CHANGE,
        payload: name
    };
}


export const phoneChanged = (phone) => {
    return {
        type: CONTACT_PHONE_CHANGE,
        payload: phone
    };
}