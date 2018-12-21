

import React, { Component } from 'react'
import { View } from 'react-native'
import { CardDescription } from '../components'
import Colors from '../../../res/values/colors'

export default class CardDescriptionContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CardDescription />
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    }
}