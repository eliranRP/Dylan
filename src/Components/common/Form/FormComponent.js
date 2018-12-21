import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


const renderError = (error, errorMessage) => {
    if (error) {
        return (<FormValidationMessage>{errorMessage}</FormValidationMessage>)
    }
}

const FormComponent = ({ label, onChangeText, errorMessage, error, placeholder, autoCorrect, secureTextEntry, numberOfLines, multiline, style }) => {
    return (
        <View style={style}>
            <FormLabel>{label}</FormLabel>
            <FormInput
                multiline={multiline}
                numberOfLines={numberOfLines}
                secureTextEntry={secureTextEntry}
                autoCorrect={autoCorrect}
                placeholder={placeholder}
                onChangeText={onChangeText} />
            {renderError(error, errorMessage)}
        </View>
    );
}

export { FormComponent };
