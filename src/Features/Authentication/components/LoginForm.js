import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
import { FormComponent, Spinner } from '../../../Components/common'
import { Button } from 'react-native-elements'
import { emailChanged, passwordChanged, loginUser, signIn } from '../actions/AuthActions'

class LoginForm extends Component {

    _onEmailChange(text) {
        this.props.emailChanged(text);
    }

    _onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    _onLogin() {
        const { email, password } = this.props;
        this.props.signIn({ email, password });
    }

    _renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button
                buttonStyle={styles.submit}
                title='Login'
                onPress={this._onLogin.bind(this)} />
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <FormComponent
                    label='Email'
                    placeholder='email@gmail.com'
                    value={this.props.email}
                    onChangeText={(value) => this._onEmailChange(value)}
                    error={false}
                    autoCorrect={false}
                    errorMessage='someError'
                />
                <FormComponent
                    label='Password'
                    placeholder='password'
                    value={this.props.password}
                    onChangeText={(value) => this._onPasswordChange(value)}
                    error={false}
                    autoCorrect={false}
                    errorMessage='someError'
                    secureTextEntry={true}
                />
                {this._renderButton()}
            </View>
        )
    }
}
const styles = {
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',

    },
    submitContainer: {
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
    },
    submit: {
        marginTop: 50,
        borderRadius: 5,
        backgroundColor: '#0095fb',
    }

}
const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser, signIn
})(LoginForm);
