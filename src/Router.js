import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginContainer from '../src/Features/Authentication/screens/LoginContainer'
import Feed from './Features/Feed/screens/Feed';
import CardDescriptionContainer from './Features/Feed/screens/CardDescriptionContainer';
import CreateAdoptionCard from './Features/Adoption/componnents/AdoptionForm';
import ContactForm from './Features/Adoption/componnents/ContactForm';
import AdoptionForm from './Features/Adoption/componnents/AdoptionForm';


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={AdoptionForm} title="Please Login" />
            </Scene>
            {/* <Scene key="main">
                <Scene key="feed" component={ImageSlider}></Scene>
            </Scene> */}
        </Router>
    );
};

export default RouterComponent;
