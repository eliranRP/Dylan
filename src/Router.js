import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginContainer from '../src/Features/Authentication/screens/LoginContainer'
import Feed from './Features/Feed/screens/Feed';
import ContactForm from './Features/Adoption/components/ContactForm';
import AdoptionForm from './Features/Adoption/components/AdoptionForm';
import Gallery from './Features/Adoption/components/Gallery';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key="auth">

                    <Scene key="login" component={LoginContainer} title="Please Login" />
                </Scene>
                <Scene key="main">
                    <Scene key="feed" component={Feed} />
                </Scene>
                <Scene key="addPost">
                    <Scene key="contactForm" component={ContactForm} back leftTitle="Save" initial />
                    <Scene key="AdoptionForm" component={AdoptionForm} back rightTitle="Save" />
                    <Scene key="dogGallery" component={Gallery} back rightTitle="Save" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
