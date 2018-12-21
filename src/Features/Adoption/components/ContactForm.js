import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, View } from 'react-native'
import { CheckBox, Icon, Text, Divider } from 'react-native-elements'
import { FormComponent, Row, Col } from '../../../Components/common'
import Colors from '../../../res/values/colors'
import ToggleSwitch from 'toggle-switch-react-native'


export default class ContactForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            adoption: true,
            Omna: true,
            calls: true,
            share: true,
            visible: true,
            adopted: false,
            inOmna: false,
            isOnDefaultToggleSwitch: true,
            isOnLargeToggleSwitch: false,
            isOnBlueToggleSwitch: false,
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={[styles.container, { marginTop: 20 }]}>
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
                    <Divider style={{ marginTop: 40, marginBottom: 5 }} />
                    <Text style={{ fontSize: 18, marginTop: 15 }}> The purpose of the post ?</Text>
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
                    <Divider style={{ marginTop: 10, marginBottom: 15 }} />
                    <Text style={{ fontSize: 18, marginTop: 5 }}> Post availability</Text>
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
                    <Divider style={{ marginTop: 5, marginBottom: 5 }} />
                    <Text style={{ fontSize: 18, marginTop: 5 }}> Post visibility</Text>
                    <Col style={styles.row}>
                        <CheckBox
                            checkedColor={Colors.colorPrimary}
                            containerStyle={styles.checkBox}
                            title='Visible'
                            onPress={() => this.setState({ ...this.state, visible: !this.state.visible })}
                            checked={this.state.visible}
                        />
                        <CheckBox
                            checkedColor={Colors.colorPrimary}
                            containerStyle={styles.checkBox}
                            title='Adopted'
                            onPress={() => this.setState({ ...this.state, adopted: !this.state.adopted })}
                            checked={this.state.adopted}
                        />
                        <CheckBox
                            checkedColor={Colors.colorPrimary}
                            containerStyle={styles.checkBox}
                            title='In omna'
                            onPress={() => this.setState({ ...this.state, inOmna: !this.state.inOmna })}
                            checked={this.state.inOmna}
                        />
                    </Col>
                    <Divider style={{ marginTop: 5, marginBottom: 5 }} />
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
        paddingTop: 10,
        backgroundColor: 'white',


    },
    checkBox: {
        backgroundColor: 'white',
        borderWidth: 0
    },
    row: {
        marginTop: 10,
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