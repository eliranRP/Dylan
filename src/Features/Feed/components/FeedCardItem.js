import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import { Row } from '../../../Components/common'
import Colors from '../../../res/values/colors'

const FeedCardItem = (props) => {
    return (
        <TouchableOpacity>

            <Card
                fontFamily='HelveticaNeue'
                title={`Title ${props.item.key}`}
                image={{ uri: "https://firebasestorage.googleapis.com/v0/b/dylan-aa036.appspot.com/o/dylan.jpg?alt=media&token=3f489fb8-7c1c-46ab-b569-afe6e7995a4b" }}>
                <Text style={{ marginBottom: 10 }}>
                    The idea with React Native Elements is more about component structure than actual design.
            </Text>
                <Row>
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

            </Card>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({})

export { FeedCardItem }
