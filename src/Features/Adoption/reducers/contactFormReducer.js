import { FORM_CHECKBOX_UPDATE, CONTACT_PHONE_CHANGE, CONTACT_NAME_CHANGE } from '../types'

const INITIAL_STATE = {
    adoption: true,
    Omna: true,
    calls: true,
    share: true,
    visible: true,
    adopted: false,
    inOmna: false,
    contactName: '',
    phone: ''
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case FORM_CHECKBOX_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };

        case CONTACT_NAME_CHANGE:
            return { ...state, contactName: action.payload };

        case CONTACT_PHONE_CHANGE:
            return { ...state, phone: action.payload };

        default:
            return state;
    }
};