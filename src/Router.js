import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginContainer from '../src/Features/Authentication/screens/LoginContainer'
import Feed from './Features/Feed/screens/Feed';


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={Feed} title="Please Login" />
            </Scene>
            {/* <Scene key="main">
                <Scene key="feed" component={ImageSlider}></Scene>
            </Scene> */}
        </Router>
    );
};

export default RouterComponent;
