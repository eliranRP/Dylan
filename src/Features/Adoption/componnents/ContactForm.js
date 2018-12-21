import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, View } from 'react-native'
import { CheckBox, Icon, Text } from 'react-native-elements'
import { FormComponent, Row, Col } from '../../../Components/common'
import Colors from '../../../res/values/colors'



export default class ContactForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            adoption: false,
            Omna: false,
            calls: true,
            share: false,
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <FormComponent
                        label='Contact name'
                        placeholder='Dylan'
                        // value={this.props.email}
                        // onChangeText={(value) => this._onEmailChange(value)}
                        error={false}
                        autoCorrect={false}
                        errorMessage='someError'
                    />
                    <FormComponent
                        label='Phone numer'
                        placeholder='054123456'
                        // value={this.props.email}
                        // onChangeText={(value) => this._onEmailChange(value)}
                        error={false}
                        autoCorrect={false}
                        errorMessage='someError'
                    />


                    <Text style={{ fontSize: 18, marginTop: 50 }}> The purpose of the post ?</Text>
                    <Col style={styles.row}>
                        <CheckBox
                            checkedColor={Colors.colorPrimary}
                            containerStyle={styles.checkBox}
                            onPress={() => this.setState({ ...this.state, Omna: !this.state.Omna })}
                            title='Omna'
                            checked={this.state.Omna}
                        />

                        <CheckBox
                            checkedColor={Colors.colorPrimary}
                            containerStyle={styles.checkBox}
                            title='Adoption'
                            onPress={() => this.setState({ ...this.state, adoption: !this.state.adoption })}
                            checked={this.state.adoption}
                        />

                    </Col>

                    <Text style={{ fontSize: 18, marginTop: 50 }}> Post availability</Text>
                    <Col style={styles.row}>

                        <CheckBox
                            checkedColor={Colors.colorPrimary}
                            containerStyle={styles.checkBox}
                            title='Share'
                            onPress={() => this.setState({ ...this.state, share: !this.state.share })}
                            checked={this.state.share}
                        />
                        <CheckBox
                            checkedColor={Colors.colorPrimary}
                            containerStyle={styles.checkBox}
                            title='Calls & WhatsApp'
                            checked={true}
                        />


                    </Col>

                </ScrollView>

                <Row style={styles.footer} pointerEvents='none'> 
                    <TouchableOpacity>
                        <Icon
                            size={35}
                            raised
                            reverse
                            name='navigate-next'
                            color='#f50' />
                    </TouchableOpacity>
                </Row>
            </View>

        )
    }
}
const styles = {
    container: {
        paddingRight: 10,
        paddingLeft: 10,
        flex: 1,
        flexDirection: 'column',
        paddingTop: 50,
        backgroundColor: 'white',


    },
    checkBox: {
        backgroundColor: 'white',
        borderWidth: 0
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
        height: 150,
        justifyContent: "flex-start"
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        marginBottom: 50,
        paddingRight: 20,
        paddingLeft: 20,
    },
    scrollView: {
        paddingBottom: 200,
    }
}