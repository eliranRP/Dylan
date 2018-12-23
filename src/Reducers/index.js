import { combineReducers } from 'redux';
import AuthReducer from '../Features/Authentication/reducers/authenticationReducer'
import feed from '../Features/Feed/reducers/FeedReducer'
import contactForm from '../Features/Adoption/reducers/contactFormReducer'

export default combineReducers({
    auth: AuthReducer,
    feed,
    contactForm
});
