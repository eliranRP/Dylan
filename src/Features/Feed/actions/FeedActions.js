
import { ADD_POST } from '../types';
import { Actions } from 'react-native-router-flux';


export const addPost = () => {
    Actions.addPost()
    return { type: ADD_POST };
};

