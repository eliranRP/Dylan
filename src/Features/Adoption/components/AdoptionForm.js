import React, { Component } from 'react'
import { TouchableOpacity, View, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Icon } from 'react-native-elements'
import { FormComponent, Row } from '../../../Components/common'



export default class AdoptionForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            adoption: false,
            Omna: false
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView
                    style={styles.KeyboardAvoidingView}
                    enabled
                    behavior={Platform.OS === 'ios' ? 'padding' : ''}>
                    <ScrollView style={styles.scrollView}>
                        <FormComponent
                            label='Title'
                            placeholder='Looking for home sweet home.... :)'
                            // value={this.props.email}
                            // onChangeText={(value) => this._onEmailChange(value)}
                            error={false}
                            autoCorrect={false}
                            errorMessage='someError'
                        />
                        <View style={styles.textAreaContainer} >
                            <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                placeholder="Type something"
                                placeholderTextColor="#bdc6cf'"
                                numberOfLines={20}
                                multiline={true}
                            />
                        </View>
                        <View style={{ height: 200 }} />
                    </ScrollView>


                    <Row style={styles.footer}>
                        <TouchableOpacity>
                            <Icon
                                size={35}
                                raised
                                reverse
                                name='camera'
                                type='feather'
                                color='red' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon
                                size={35}
                                raised
                                reverse
                                name='done'
                                color='#f50' />
                        </TouchableOpacity>
                    </Row>
                </KeyboardAvoidingView>

            </View>
        )
    }
}
const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 30,
        backgroundColor: 'white',


    },
    row: {
        marginTop: 20,
    },
    textAreaContainer: {
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        borderColor: '#bdc6cf',
        borderWidth: 1,
        padding: 5
    },
    textArea: {
        height: 350,
        justifyContent: "flex-start"
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        justifyContent: 'space-between',
        marginBottom: 50,
        paddingRight: 20,
        paddingLeft: 20,
    },
    scrollView: {
        flex: 1,
    },
    KeyboardAvoidingView: {
        flex: 1,
    },
}