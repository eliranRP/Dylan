import React, { Component } from 'react'
import { TouchableOpacity, ScrollView, View } from 'react-native'
import { CheckBox, Icon, Text, Divider } from 'react-native-elements'
import { FormComponent, Footer, Col } from '../../../Components/common'
import Colors from '../../../res/values/colors'
import { checkboxUpdated, contactNameChanged, phoneChanged } from '../actions/contactFormAction'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


class ContactForm extends Component {


    _onContactNameChanged(name) {
        this.props.contactNameChanged(name)
    }

    _onPhoneChange(phone) {
        this.props.phoneChanged(phone)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={[styles.container, { marginTop: 20 }]}>
                    <FormComponent
                        label='Contact name'
                        placeholder='Dylan'
                        value={this.props.contactName}
                        onChangeText={(value) => this._onContactNameChanged(value)}
                        error={false}
                        autoCorrect={false}
                        errorMessage='someError'
                    />
                    <FormComponent
                        label='Phone numer'
                        placeholder='054123456'
                        value={this.props.phone}
                        onChangeText={(value) => this._onPhoneChange(value)}
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
                            onPress={() => this.props.checkboxUpdated({ prop: 'Omna', value: !this.props.Omna })}
                            title='Omna'
                            checked={this.props.Omna}
                        />

                        <CheckBox
                            checkedColor={Colors.colorPrimary}
                            containerStyle={styles.checkBox}
                            title='Adoption'
                            onPress={() => this.props.checkboxUpdated({ prop: 'adoption', value: !this.props.adoption })}
                            checked={this.props.adoption}
                        />

                    </Col>
                    <Divider style={{ marginTop: 10, marginBottom: 15 }} />
                    <Text style={{ fontSize: 18, marginTop: 5 }}> Post availability</Text>
                    <Col style={styles.row}>

                        <CheckBox
                            checkedColor={Colors.colorPrimary}
                            containerStyle={styles.checkBox}
                            title='Share'
                            onPress={() => this.props.checkboxUpdated({ prop: 'share', value: !this.props.share })}
                            checked={this.props.share}
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
                            onPress={() => this.props.checkboxUpdated({ prop: 'visible', value: !this.props.visible })}
                            checked={this.props.visible}
                        />
                        <CheckBox
                            checkedColor={Colors.colorPrimary}
                            containerStyle={styles.checkBox}
                            title='Adopted'
                            onPress={() => this.props.checkboxUpdated({ prop: 'adopted', value: !this.props.adopted })}
                            checked={this.props.adopted}
                        />
                        <CheckBox
                            checkedColor={Colors.colorPrimary}
                            containerStyle={styles.checkBox}
                            title='In omna'
                            onPress={() => this.props.checkboxUpdated({ prop: 'inOmna', value: !this.props.inOmna })}
                            checked={this.props.inOmna}

                        />
                    </Col>
                    <Divider style={{ marginTop: 5, marginBottom: 5 }} />
                </ScrollView>
                <Footer>
                    <TouchableOpacity
                        onPress={() => Actions.AdoptionForm()}
                    >
                        <Icon
                            size={35}
                            raised
                            reverse
                            name='navigate-next'
                            color='#f50' />
                    </TouchableOpacity>
                </Footer>
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
    scrollView: {
        paddingBottom: 200,
    }
}
const mapStateToProps = ({ contactForm }) => {
    const {
        adoption,
        Omna,
        calls,
        share,
        visible,
        adopted,
        inOmna,
        contactName,
        phone } = contactForm;

    return {
        adoption,
        Omna,
        calls,
        share,
        visible,
        adopted,
        inOmna,
        contactName,
        phone
    };
};

export default connect(mapStateToProps, { checkboxUpdated, contactNameChanged, phoneChanged })(ContactForm);