import React from 'react'
import { View } from 'react-native'

const Row = ({ children, style }) => {

    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )
}

const styles = {
    container: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        position: 'relative',
    }
}

export { Row }
