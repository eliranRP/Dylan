import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


const renderError = (error, errorMessage) => {
    if (error) {
        return (<FormValidationMessage>{errorMessage}</FormValidationMessage>)
    }
}

const FormComponent = ({ label, onChangeText, errorMessage, error, placeholder }) => {
    return (
        <View>
            <FormLabel>{label}</FormLabel>
            <FormInput placeholder={placeholder} onChangeText={onChangeText} />
            {renderError(error, errorMessage)}
        </View>
    );
}

export { FormComponent };
