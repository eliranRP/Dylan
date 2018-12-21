import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Icon, ButtonGroup } from 'react-native-elements';
import { CardSection, Row, ImageSlider } from '../../../Components/common';
import Style from '../../../res/values/style'
import Colors from '../../../res/values/colors'

class CardDescription extends Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: -1
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    render() {
        const { selectedIndex } = this.state

        return (
            <View style={styles.container}>
                <CardSection style={styles.cardSection}>
                    <ImageSlider />
                    <ScrollView>
                        <CardSection style={{ flexDirection: 'column' }}>
                            <Text h4> Title </Text>
                            <Text style={styles.paragraph}>
                                The idea with React Native Elements is more about component structure than actual design.
                                The idea with React Native Elements is more about component structure than actual design.

                                The idea with React Native Elements is more about component structure than actual design.
                                The idea with React Native Elements is more about component structure than actual design.

                                The idea with React Native Elements is more about component structure than actual design.
                                The idea with React Native Elements is more about component structure than actual design.

                                The idea with React Native Elements is more about component structure than actual design.
                                The idea with React Native Elements is more about component structure than actual design.
                                The idea with React Native Elements is more about component structure than actual design.

                                The idea with React Native Elements is more about component structure than actual design.
                                The idea with React Native Elements is more about component structure than actual design.

                                The idea with React Native Elements is more about component structure than actual design.
                                The idea with React Native Elements is more about component structure than actual design.

                                The idea with React Native Elements is more about component structure than actual design.
             </Text>
                        </CardSection>
                    </ScrollView>
                </CardSection>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    style={styles.ButtonGroup}
                    buttons={['Adoption', 'Omna']}
                    containerStyle={{ height: 50 }}
                />
                <Row style={styles.row}>
                    <Icon
                        onPress={() => console.log('')}
                        raised
                        name='phone-call'
                        type='feather'
                        color={Colors.colorPrimary}
                    />
                    <Icon
                        onPress={() => console.log('')}
                        raised
                        name='share-2'
                        type='feather'
                        color={Colors.colorPrimary}
                    />
                    <Icon
                        onPress={() => console.log('')}
                        raised
                        name='whatsapp'
                        type='font-awesome'
                        color={Colors.colorPrimary}
                    />
                </Row>
            </View>

        );

    }
}

const styles = {

    container: {
        marginTop: 20,
        backgroundColor: 'white',
        flex: 1
    },
    paragraph: {
        fontFamily: "HelveticaNeue",
        fontSize: Style.font.medium,
        marginBottom: 10,
        padding: 15
    },
    row: {
        flex: 1
    },
    ButtonGroup: {
        flex: 2
    },
    cardSection: {
        flex: 5,
        flexDirection: 'column'
    }
}

export { CardDescription };
